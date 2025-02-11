import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import style from '@/components/CartProductsList.module.css'
import RemoveFromCart from '@/components/RemoveFromCart'
import fetcher from '@/modules/fetcher'

interface Product {
  id: number
  lPrice: number
  name: string
  path: string
}

export default function CartProductsList({ products }: { products: Map<number, number> }) {
  const productIds = [...products.keys()].join(',')
  const { data, error, isLoading } = useSWR<Product[], unknown>(`/api/products?ids=${productIds}`, fetcher)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error :(</p>
  }

  if (!data?.length) {
    return <p>No products found</p>
  }

  const subtotal = data.reduce((acc, product) => {
    const quantity = products.get(product.id) ?? 0

    return acc + product.lPrice * quantity
  }, 0)

  const shippingCost = 16
  const couponDiscount = 0
  const total = subtotal + shippingCost - couponDiscount

  return (
    <section className={style['main-content']}>
      <article className={style['list-of-products-container']}>
        <header>
          <p>Products</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </header>
        <ul>
          {data.map((product) => (
            <li key={product.id} className={style['product-card']}>
              <Image
                src={product.path}
                alt={product.name}
                width={70}
                height={70}
                priority
                unoptimized
              />
              <Link href={`/shop/${product.id}`}>{product.name}</Link>
              <p>${product.lPrice}</p>
              <p>{products.get(product.id)}</p>
              <p>${product.lPrice * (products.get(product.id))}</p>
              <RemoveFromCart productId={product.id} />
            </li>
          ))}
        </ul>
      </article>
      <article className={style['cart-totals-container']}>
        <h3>Cart Total</h3>
        <form action="" method="get">
          <label htmlFor="couponapply">Coupon Apply</label>
          <div>
            <input type="text" id="couponapply" placeholder="Enter coupon code here..." />
            <button type="button">Apply</button>
          </div>
        </form>
        <p>Subtotal:<span> ${subtotal}</span></p>
        <p>Coupon Discount: <span>(-) {couponDiscount}</span></p>
        <p>Shipping: <span>+${shippingCost}</span></p>
        <Link href="/" className={style['small-link']}>View shipping charge</Link>
        <h4>Total: <span>${total}</span></h4>
        <button type="button">Proceed To Checkout</button>
        <Link href="/" className={style['big-link']}>Continue Shopping</Link>
      </article>
    </section>
  )
}
