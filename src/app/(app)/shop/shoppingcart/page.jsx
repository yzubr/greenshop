'use client'

import { useContext } from 'react'
import Link from 'next/link'
import CartContext from '@/contexts/CartContext'
import styles from './ShoppingCartPage.module.css'

export default function Page() {
  const { cart, removeFromCart } = useContext(CartContext)

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
                    <Link
                      href={`/shop/${productId}`}
                    >
                      Product ID:{productId}
                    </Link>
                    {' '}
                    <p> Quantity: {quantity}</p>
                    <button type="button" onClick={removeFromCart(productId)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
                        <path d="M15.8892 8.55408C15.8892 16.5731 17.0435 20.1979 9.27967 20.1979C1.5149 20.1979 2.693 16.5731 2.693 8.55408" stroke="#727272" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M17.3651 5.47979H1.2146" stroke="#727272" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M12.7148 5.47979C12.7148 5.47979 13.2434 1.71408 9.28911 1.71408C5.33578 1.71408 5.86435 5.47979 5.86435 5.47979" stroke="#727272" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </button>
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
