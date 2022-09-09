import { useContext } from "react"
import { PicsomeContext } from "../PicsomeContext"

function CartItem({item}) {
  const {removeFromCart} = useContext(PicsomeContext)

  return (
      <div className="cart-item">
          <i className="ri-delete-bin-line" onClick={() => removeFromCart(item)} ></i>
          <img src={item.url} width="130px" />
          <p>$5.99</p>
      </div>
  )
}

export default CartItem