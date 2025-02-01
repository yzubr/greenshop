export default function ChangeProductQuantity({ quantity, setQuantity }) {
  function increaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  function decreaseQuantity() {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1))
  }

  return (
    <>
      <button type="button" disabled={quantity === 1} onClick={decreaseQuantity}>-</button>
      <p>{quantity}</p>
      <button type="button" onClick={increaseQuantity}>+</button>
    </>
  )
}
