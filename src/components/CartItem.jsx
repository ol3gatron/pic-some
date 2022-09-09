import { useContext, useState } from "react"
import { PicsomeContext } from "../PicsomeContext"

function CartItem({item}) {
  const {removeFromCart} = useContext(PicsomeContext)

  const [isHovered, setIsHovered] = useState(false)

  return (
      <div className="cart-item">
          {/* <i className="ri-delete-bin-line" onClick={() => removeFromCart(item)} ></i> */}
          <i className={`ri-delete-bin-${isHovered ? "fill" : "line"}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => removeFromCart(item)} ></i>
          <img src={item.url} width="130px" />
          <p>$5.99</p>
      </div>
  )
}

export default CartItem