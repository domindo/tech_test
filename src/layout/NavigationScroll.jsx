import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

export const NavigationScroll = ({ children }) => {
  const location = useLocation()
  const { pathname } = location

  const dispatchedPathname = useRef()

  useEffect(() => {
    if (dispatchedPathname.current !== pathname) {
      const event = new CustomEvent("onReactRouterDomeChange", {
        detail: pathname,
      })

      dispatchedPathname.current = pathname
      window.dispatchEvent(event) // for AIS can reconigize when url change
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [pathname])

  return children
}
