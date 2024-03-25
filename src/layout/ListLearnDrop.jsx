import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import { HEIGHT_HEADER } from "~/constants"
import { listExplorePrograms } from "~/features/home"
import PropTypes from "prop-types"
import "./Layout.scss"

export const ListLearnDrop = props => {
  const { styleBox, styleLink } = props
  const location = useLocation()
  return (
    <div
      style={{
        position: "absolute",
        top: `${HEIGHT_HEADER}px`,
        left: 0,
        backgroundColor: "white",
        zIndex: 101,
        overflow: "visible",
        borderTop: "1px solid rgb(236, 236, 236)",
        ...styleBox,
      }}
      className="learn-drop"
    >
      {listExplorePrograms?.map(explore => {
        return (
          <NavLink
            key={explore?.url}
            to={explore?.url}
            style={{
              width: "250px",
              backgroundColor: "white",
              borderBottom: "1px solid #ececec",
              paddingTop: "1.2rem",
              paddingBottom: "1.2rem",
              transition: "all .4s",
              display: "block",
              padding: "1.2rem 20px",
              textAlign: "left",
              whiteSpace: "nowrap",
              fontSize: "14px",
              fontWeight: location?.pathname === explore?.url ? 700 : 400,
              color: location?.pathname === explore?.url ? "#1ba7e0" : "#222",
              ...styleLink,
            }}
            className="nav-header"
          >
            {explore?.title}
          </NavLink>
        )
      })}
    </div>
  )
}
ListLearnDrop.propTypes = {
  styleLink: PropTypes.any,
  styleBox: PropTypes.any,
}
