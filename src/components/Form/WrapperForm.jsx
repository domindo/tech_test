import React from "react"
import PropTypes from "prop-types"

export const WrapperForm = props => {
  const { children, styleWrapper } = props
  return (
    <div
      style={{
        position: "relative",
        boxShadow: "0 2px 5px rgba(0,0,0,.2)",
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "220px",
        ...styleWrapper,
      }}
    >
      {children}
    </div>
  )
}
WrapperForm.propTypes = {
  children: PropTypes.any,
  styleWrapper: PropTypes.any,
}
