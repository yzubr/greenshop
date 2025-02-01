'use client'
import { useContext, useState } from 'react'
import CartContext from '@/contexts/CartContext'
import AddToCartButton from './AddToCartButton'
import AddToFavourite from './AddToFavourite'
import BuyNowButton from './BuyNowButton'
import ChangeProductQuantity from './ChangeProductQuantity'

export default function ProductActions({ productId }) {
  const { cart } = useContext(CartContext)

  const [quantity, setQuantity] = useState(cart.get(productId) || 1)

  return (
    <>
      <ChangeProductQuantity quantity={quantity} setQuantity={setQuantity} />
      <BuyNowButton productId={productId} quantity={quantity} />
      <AddToCartButton productId={productId} quantity={quantity} />
      <AddToFavourite productId={productId} />
    </>
  )
}
