import React, { useEffect, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { call, logo } from "~/assets/images"
import { debounce } from "~/utils"
import { HEIGHT_HEADER, routePaths } from "~/constants"
import "./Layout.scss"
import { HeaderMobile, ListLearnDrop } from "."

const HeaderLayout = () => {
  const navigate = useNavigate()
  const [positionY, setPositionY] = useState(0)
  const [statusOurPrograms, setStatusOurPrograms] = useState(false)

  const handleClickOurPrograms = () => {
    setStatusOurPrograms(prev => !prev)
  }

  useEffect(() => {
    const handleWheel = e => {
      e.preventDefault()
      if (e?.deltaY > 0) {
        setStatusOurPrograms(false)
        setPositionY(-100)
        return
      }
      setPositionY(0)
    }
    window.addEventListener("wheel", debounce(handleWheel, 100))
    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [positionY])

  useEffect(() => {
    const handleClickWindow = e => {
      const elementOurPrograms = document.querySelector(
        ".nav-link.nav-ourPrograms"
      )
      const elementIconMenu = document.querySelector(".header-container_menu")
      const elementHeaderMobile = document.querySelector(
        ".header-container_mobile .accordion-item .accordion-header"
      )
      if (
        e.target.classList?.toString() ===
          elementOurPrograms.classList?.toString() ||
        e.target.classList?.toString() ===
          elementIconMenu.classList?.toString() ||
        elementHeaderMobile?.contains(e.target)
      )
        return
      setStatusOurPrograms(false)
    }
    window.addEventListener("click", handleClickWindow)
    return () => window.removeEventListener("click", handleClickWindow)
  }, [statusOurPrograms])

  return (
    <div
      className="w-100 header-container"
      style={{
        height: `${HEIGHT_HEADER}px`,
        boxShadow: "0 4px 5px rgba(0,0,0,.1)",
        zIndex: 50,
        background: "white",
        position: "fixed",
        inset: 0,
        transform: `translate3d(0px, ${positionY}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        transformStyle: "preserve-3d",
        transition: "all 0.4s",
      }}
    >
      {statusOurPrograms && (
        <div
          className="header-container_mobile"
          style={{ position: "absolute", top: "80px", left: 0, right: 0 }}
        >
          <HeaderMobile />
        </div>
      )}
      <div
        className="d-flex flex-row justify-content-between header-container_list"
        style={{ height: "100%" }}
      >
        <div
          style={{ cursor: "pointer" }}
          className="d-flex align-items-center header-container_leftImg"
        >
          <img
            onClick={() => navigate(routePaths.app.home)}
            className="header-container_logo"
            src={logo}
          />
          <div className="header-container_tagline">
            Vì tương lai Việt Nam thịnh vượng
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            height: "100%",
          }}
          className="header-container_navigate"
        >
          <nav
            className="navbar navbar-expand-lg p-0"
            style={{ height: "100%" }}
          >
            <div style={{ height: "100%" }}>
              <ul className="navbar-nav" style={{ fontSize: "16px" }}>
                <li className="nav-item active">
                  <NavLink className="nav-link px-3" to={routePaths.app.home}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item" style={{ position: "relative" }}>
                  <div
                    className="nav-link nav-ourPrograms px-3"
                    onClick={handleClickOurPrograms}
                  >
                    Our Programs
                    <i
                      style={{
                        fontSize: 12,
                        paddingLeft: "4px",
                        paddingTop: "5px",
                      }}
                      className="fas fa-chevron-down"
                    ></i>
                  </div>
                  {statusOurPrograms && <ListLearnDrop />}
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link px-3"
                    to={routePaths.app.aboutUs}
                  >
                    About us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link px-3" to={routePaths.app.root}>
                    Waiting 1
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link px-3" to={routePaths.app.root}>
                    Waiting 2
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="d-flex align-items-center">
          <Link
            to=""
            className="d-flex align-items-center"
            style={{ textDecoration: "none" }}
          >
            <img className="header-container_call" src={call} />
            <div
              className="header-container_leftItem"
              style={{
                fontSize: 16,
                paddingLeft: "10px",
                color: "#179d50",
              }}
            >
              Call us
            </div>
          </Link>
          <i
            className="fas fa-bars header-container_menu"
            onClick={handleClickOurPrograms}
          ></i>
        </div>
      </div>
    </div>
  )
}

export default HeaderLayout
