import React, { useEffect } from "react"
import PropTypes from "prop-types"
import HeaderLayout from "./HeaderLayout"
import FooterLayout from "./FooterLayout"
import { HEIGHT_HEADER, routePaths } from "~/constants"
import { Message } from "~/components/Message"
import "./Layout.scss"
import { useLocation } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

const MainLayout = ({ children }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    })
  }, [])

  const location = useLocation()
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          cursor: "pointer",
          position: "fixed",
          backgroundColor: "#1BA7E0",
          borderRadius: "50%",
          right: "30px",
          bottom: "30px",
          zIndex: "100",
        }}
        className="icon_message d-flex justify-content-center align-items-center message-icon"
      >
        <Message />
      </div>
      <HeaderLayout />
      <div
        className="d-flex"
        style={{
          minHeight: "100%",
          width: "100%",
          marginTop: `${HEIGHT_HEADER}px`,
        }}
      >
        {children}
      </div>
      {location?.pathname !== routePaths.app.aboutUs && <FooterLayout />}
    </div>
  )
}

export default MainLayout

MainLayout.propTypes = {
  children: PropTypes.any,
}
