'use client'

import { useContext } from 'react'
import Link from 'next/link'
import CartProductsList from '@/components/CartProductsList'
import CartContext from '@/contexts/CartContext'
import styles from './ShoppingCartPage.module.css'

export default function Page() {
  const { cart } = useContext(CartContext)

  if (!cart.size) {
    return (
      <div className={styles['empty-cart-block']}>
        <h3>Your cart is currently empty.</h3>
        <p>Visit the homepage to choose products or search for what you need.</p>
        <Link href="/">
          Visit homepage
        </Link>
      </div>
    )
  }

  return (
    <CartProductsList products={cart} />
  )
}
