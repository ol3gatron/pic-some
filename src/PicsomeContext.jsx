import { useEffect, useState, createContext} from "react"

const PicsomeContext = createContext()

function PicsomeContextProvider({children}) {
  const [images, setImages] = useState([])

  useEffect(() => {
    getImages()
  }, [])

  async function getImages() {
    const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    const data = await res.json()
    setImages(data)
  }

  return (
    <PicsomeContext.Provider value={{images}}>
      {children}
    </PicsomeContext.Provider>
  )
}

export { PicsomeContextProvider, PicsomeContext }
