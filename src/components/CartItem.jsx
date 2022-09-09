import { useContext, useState } from "react"
import { PicsomeContext } from "../PicsomeContext"
import useHover from "../hooks/useHover"

function CartItem({item}) {
  const [isHovered, itemRef] = useHover()

  const {removeFromCart} = useContext(PicsomeContext)

  return (
      <div className="cart-item">
          <i className={`ri-delete-bin-${isHovered ? "fill" : "line"}`} onClick={() => removeFromCart(item)} ref={itemRef} ></i>
          <img src={item.url} width="130px" />
          <p>$5.99</p>
      </div>
  )
}

export default CartItem