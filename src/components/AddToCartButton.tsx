'use client'

import { useContext } from 'react'
import CartContext from '@/contexts/CartContext'

interface AddToCartButtonProps {
  productId: number;
  quantity: number;
}

export default function AddToCartButton({ productId, quantity }: AddToCartButtonProps) {
  const { addToCart } = useContext(CartContext)

  return (
    <button type="button" onClick={() => addToCart(productId, quantity)}>
      Add to cart
    </button>
  )
}
