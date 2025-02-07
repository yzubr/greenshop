'use server'
import Image from 'next/image'
import imageComingSoon from '../assets/images/imageComingSoon.png'
import getProductInCartById from '../queries/get-product-in-cart-by-id'

export default async function ProductCardInCart({ productId, quantity }) {
  const product = await getProductInCartById(productId)

  return (
    <article>
      {product.path === null
        ? (
            <Image
              src={imageComingSoon}
              alt="Image coming soon"
              width={20}
              height={20}
              priority
              unoptimized
            />
          )
        : (
            <Image
              src={product.path}
              alt={product.name}
              width={product.width}
              height={product.height}
              priority
              unoptimized
            />
          )}
      <p>{product.name}</p>
      <p>{quantity}</p>
    </article>
  )
}
