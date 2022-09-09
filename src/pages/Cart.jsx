import { useContext, useState } from "react"
import { PicsomeContext } from "../PicsomeContext"

import CartItem from "../components/CartItem"


function Cart() {
  const [isOrdering, setIsOrdering] = useState(false)

  const {cartItems} = useContext(PicsomeContext)
  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))

  function totalCost() {
    const price = cartItems.length * 5.99
    return price.toLocaleString("en-US", {style: "currency", currency: "USD"})
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCost()}</p>
      <div className="order-button">
        <button>{isOrdering ? "Ordering..." : "Place Order"}</button>
      </div>
    </main>
  )
}

export default Cart
