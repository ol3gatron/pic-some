import { useContext, useState } from "react"
import PropTypes from 'prop-types'
import { PicsomeContext } from "../PicsomeContext"

function Image({className, image}) {
  const [isHovered, setIsHovered] = useState(false)

  const {toggleFavorite, addToCart} = useContext(PicsomeContext)

  const heartIcon = isHovered &&
  <i className="ri-heart-line favorite" onClick={() => toggleFavorite(image.id)}></i>
  const heartIconFavorite = image.isFavorite && <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(image.id)}></i>
  const cartIcon = isHovered && <i className="ri-add-circle-line cart" onClick={() => addToCart(image)}></i>


  return (
      <div
        className={`${className} image-container`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

      {heartIcon}
      {heartIconFavorite}
      {cartIcon}

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