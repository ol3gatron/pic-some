import { useContext } from "react"
import { Link } from "react-router-dom"
import { PicsomeContext } from "../PicsomeContext"

function Header() {
  const {cartItems} = useContext(PicsomeContext)

  const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"

  return (
      <header>
          <Link to="/"><h2>Pic Some</h2></Link>
          <Link to="/cart"><i className={`${cartClassName} ri-fw ri-2x`}></i></Link>
      </header>
  )
}

export default Header