import { useState } from "react"

const PicsomeContext = React.createContext()

function PicsomeContextProvider({children}) {
  const [images, setImages] = useState([])

  return (
    <PicsomeContext.Provider value={{images}}>
      {children}
    </PicsomeContext.Provider>
  )
}

export { PicsomeContextProvider, PicsomeContext }
