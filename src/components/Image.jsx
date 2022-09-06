import { useState } from "react"

function Image({className, image}) {
  const [isHovered, setIsHovered] = useState(false)

  const heartIcon = isHovered && <i className="ri-heart-line favorite"></i>
  const cartIcon = isHovered && <i className="ri-add-circle-line cart"></i>

  return (
      <div
        className={`${className} image-container`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

      {heartIcon}
      {cartIcon}

      <img src={image.url} className="image-grid"/>
      </div>
  )
}

export default Image
