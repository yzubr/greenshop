import { type ReactNode, useState } from 'react'
import CartContext from '@/contexts/CartContext'

const initialState = new Map()

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Map<number, number>>(initialState)

  function addToCart(productId: number, quantity: number) {
    setCart((currentCart) => {
      const newCart = new Map(currentCart)
      const currentQuantity = quantity

      newCart.set(productId, currentQuantity)

      return newCart
    })
  }

  function removeFromCart(productId: number) {
    setCart((currentCart) => {
      const newCart = new Map(currentCart)
      newCart.delete(productId)

      return newCart
    })
  }

  const cartContextValue = {
    addToCart,
    cart,
    removeFromCart
  }

  return (
    <CartContext value={cartContextValue}>
      {children}
    </CartContext>
  )
}
