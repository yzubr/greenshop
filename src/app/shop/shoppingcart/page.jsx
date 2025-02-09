'use client'

import { useContext } from 'react'
import CartProductsList from '@/components/CartProductsList'
import CartContext from '@/contexts/CartContext'

export default function Page() {
  const { cart } = useContext(CartContext)

  if (!cart.size) {
    return <p>Cart is empty</p>
  }

  return (
    <CartProductsList products={cart} />
  )
}
