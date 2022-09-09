import { useContext, useState } from "react"
import PropTypes from 'prop-types'
import { PicsomeContext } from "../PicsomeContext"
import useHover from "../hooks/useHover"

function Image({className, image}) {
  const [isHovered, itemRef] = useHover()

  const {toggleFavorite, cartItems, addToCart, removeFromCart} = useContext(PicsomeContext)

  function heartIcon() {
    if (image.isFavorite) {
        return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(image.id)}></i>
    } else if (isHovered) {
        return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(image.id)}></i>
    }
  }

  function cartIcon() {
    if (cartItems.find(item => item.id == image.id)) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(image)}></i>
    } else if (isHovered) {
      return <i
      className="ri-add-circle-line cart" onClick={() => addToCart(image)}
    ></i>
    }
  }



  return (
      <div
        className={`${className} image-container`}
        ref={itemRef}
      >

      {heartIcon()}
      {cartIcon()}

      <img src={image.url} className="image-grid"/>
      </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  })
}

export default Image