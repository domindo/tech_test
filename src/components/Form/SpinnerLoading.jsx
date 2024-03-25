import React from "react"
import { Spinner } from "reactstrap"
import PropTypes from "prop-types"

export const SpinnerLoading = props => {
  const {
    color = "primary",
    height = "3rem",
    width = "3rem",
    ...propsLoading
  } = props
  return (
    <Spinner
      className="m-5"
      color={color}
      style={{
        height: height,
        width: width,
      }}
      {...propsLoading}
    >
      {" "}
    </Spinner>
  )
}
SpinnerLoading.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
}
