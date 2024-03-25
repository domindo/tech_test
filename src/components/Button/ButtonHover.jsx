import React, { useState } from "react"
import { Button } from "reactstrap"
import PropTypes from "prop-types"

export const ButtonHover = props => {
  const {
    content = "Learn more",
    color = "#1178bb",
    background = "#ffffff",
    styleButton,
    ...propsButton
  } = props
  const [status, setStatus] = useState(false)
  return (
    <Button
      style={{
        fontSize: "1rem",
        padding: "15px",
        borderRadius: "10px",
        fontWeight: 500,
        textAlign: "center",
        transition: "all 0.2s",
        border: `1px solid ${color}`,
        color,
        background,
        ...(status && { color: background, background: color }),
        ...styleButton,
      }}
      onMouseEnter={() => setStatus(true)}
      onMouseLeave={() => setStatus(false)}
      {...propsButton}
    >
      {content}
    </Button>
  )
}
ButtonHover.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
  content: PropTypes.string,
  styleButton: PropTypes.any,
}
