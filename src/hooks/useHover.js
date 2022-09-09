import { useState, useEffect, useRef } from "react"

function useHover() {
  const [isHovered, setIsHovered] = useState(false)
  const itemRef = useRef(null)

  function enter() {
    setIsHovered(true)
  }

  function leave() {
    setIsHovered(false)
  }

  useEffect(() => {
    const ref = itemRef.current

    ref.addEventListener("mouseenter", enter)
    ref.addEventListener("mouseleave", leave)

    return () => {
      ref.removeEventListener("mouseenter", enter)
      ref.removeEventListener("mouseleave", leave)
    }
  }, [])

  return [isHovered, itemRef]
}

export default useHover
