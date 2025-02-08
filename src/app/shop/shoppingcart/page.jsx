'use client'

import { useContext } from 'react'
import Link from 'next/link'
import ProductCardInCart from '@/components/ProductCardInCart'
import CartContext from '@/contexts/CartContext'
import styles from './ShoppingCartPage.module.css'

export default function Page() {
  const { cart } = useContext(CartContext)

  return (
    <>
      {cart.size > 0
        ? (
            <section className={styles['shopping-cart-section']}>
              <article className={styles['grid-container']}>
                <div className={styles['grid-container-header']}>
                  <p>Products</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Total</p>
                </div>
                {Array.from(cart.entries()).map(([productId, quantity]) => (
                  <div key={productId}>
                    <ProductCardInCart productId={productId} quantity={quantity} />
                  </div>
                ))}
              </article>
              <article>
                <h2>Cart Totals</h2>
                <h4>Coupon Apply</h4>
                <form action="" method="post">
                  <input type="text" name="" id="" placeholder="Enter coupon code here..." />
                  <button type="submit">Apply</button>
                </form>
              </article>

            </section>
          )
        : (
            <div className={styles['empty-cart-block']}>
              <h3>Your cart is currently empty.</h3>
              <p>Visit the homepage to choose products or search for what you need.</p>
              <Link href="/">
                Visit homepage
              </Link>
            </div>
          )}

    </>
  )
}
