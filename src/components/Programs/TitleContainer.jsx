import React from "react"
import PropTypes from "prop-types"

export const TitleContainer = props => {
  const { title = "", children } = props
  return (
    <div className="d-flex align-items-start flex-column flex-wrap">
      <h1
        style={{
          fontSize: "1.3rem",
          fontWeight: 600,
          paddingTop: "20px",
        }}
      >
        {title}
      </h1>
      {children}
    </div>
  )
}

TitleContainer.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
}
