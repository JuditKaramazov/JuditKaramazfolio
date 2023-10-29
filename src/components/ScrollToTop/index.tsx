import React, { useRef, useEffect } from "react"
import { useWindowScroll } from "react-use"
import styles from './index.module.css'

const ScrollToTop = () => {
  const ref = useRef(null)
  const { y } = useWindowScroll()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (y > 200) {
        ref.current.style.display = "flex"
      } else {
        ref.current.style.display = "none"
      }
    }
  }, [y])

  return (
    <div className={styles.up} ref={ref} onClick={() => scrollToTop()}>
      &#x2191;
    </div>
  )
}

export default ScrollToTop
