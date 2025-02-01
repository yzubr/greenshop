import { createContext } from 'react'

interface CartContextValue {
  addToCart: (productId: number, quantity: number) => void
  cart: Map<number, number>
  removeFromCart: (productId: number) => void
}

const CartContext = createContext<CartContextValue>({
  addToCart: () => new Map(),
  cart: new Map(),
  removeFromCart: () => new Map()
})

export default CartContext
