import { useEffect, useState, createContext} from "react"

const PicsomeContext = createContext()

function PicsomeContextProvider({children}) {
  const [images, setImages] = useState([])
  const [cartItems, setCartItems]  = useState([])

  useEffect(() => {
    getImages()
  }, [])

  async function getImages() {
    const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    const data = await res.json()
    setImages(data)
  }

  function toggleFavorite(id) {
    const newArray = images.map(image => image.id == id ?
      {...image, isFavorite: !image.isFavorite} :
      image)
      setImages(newArray)
  }

  function addToCart(imageObj) {
    setCartItems(prevState => ([...prevState, imageObj]))
  }

  function removeFromCart(imageObj) {
    const newArray = cartItems.filter(item => item.id !== imageObj.id)
    setCartItems(prevState => ([...newArray]))
  }

  return (
    <PicsomeContext.Provider value={{images, toggleFavorite, addToCart, cartItems, removeFromCart}}>
      {children}
    </PicsomeContext.Provider>
  )
}

export { PicsomeContextProvider, PicsomeContext }
