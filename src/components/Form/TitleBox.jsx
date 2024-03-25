import React from "react"
import PropTypes from "prop-types"
import "./TitleBox.scss"
export const TitleBox = props => {
  const {
    styleBox,
    styleTitle,
    colorTitle = "#1178bb",
    title = "",
    children,
  } = props
  return (
    <div
      style={{
        paddingTop: "20px",
        paddingBottom: "40px",
        backgroundColor: "transparent",
        ...styleBox,
      }}
      className="d-flex align-items-center flex-column titleBox-container"
    >
      <h1
        style={{
          color: colorTitle,
          fontWeight: 600,
          textAlign: "center",
          marginBottom: "30px",
          paddingTop: "20px",
          letterSpacing:"-1px",
          ...styleTitle,
        }}
      >
        {title}
      </h1>
      {children}
    </div>
  )
}

TitleBox.propTypes = {
  children: PropTypes.any,
  styleBox: PropTypes.any,
  colorTitle: PropTypes.string,
  title: PropTypes.string,
  styleTitle: PropTypes.any,
}
