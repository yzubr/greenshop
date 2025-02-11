'use client'

import { useContext } from 'react'
import CartContext from '@/contexts/CartContext'

interface RemoveFromCartButtonProps {
  productId: number;
}

export default function RemoveFromCartButton({ productId }: RemoveFromCartButtonProps) {
  const { removeFromCart } = useContext(CartContext)

  return (
    <button type="button" onClick={() => removeFromCart(productId)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" fill="none"><path d="M15.89 8.554c0 8.02 1.154 11.644-6.61 11.644-7.765 0-6.587-3.625-6.587-11.644M17.365 5.48H1.215M12.715 5.48s.528-3.766-3.426-3.766c-3.953 0-3.425 3.766-3.425 3.766" stroke="#727272" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
    </button>
  )
}
