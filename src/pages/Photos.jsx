import { getClass } from "../utils"
import Image from "../components/Image"
import { PicsomeContext } from "../PicsomeContext"
import { useContext } from "react"

// Get the allPhotos array from context
    // map over it, creating <Image /> elements of the component we just made
    // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />


function Photos() {
  const {images} = useContext(PicsomeContext)
  const imagesElements = images.map((image, index) => {
    return (
      <Image key={image.id} image={image} className={getClass(index)}/>
    )
  })

  return (
      <main className="photos">
      {imagesElements}
    </main>
  )
}

export default Photos
