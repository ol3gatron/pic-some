import { getClass } from "../utils"
import Image from "../components/Image"
import { PicsomeContext } from "../PicsomeContext"
import { useContext } from "react"

function Photos() {
  const {images} = useContext(PicsomeContext)
  const imagesElements = images.map((image, index) => {
    return (
      <Image
        key={image.id}
        image={image}
        className={getClass(index)}
      />
    )
  })

  return (
      <main className="photos">
      {imagesElements}
    </main>
  )
}

export default Photos
