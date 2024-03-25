import React from "react"
import PropTypes from "prop-types"
import { Button, Spinner } from "reactstrap"
import { useTranslation } from "react-i18next"

function ButtonLoading({
  className = "",
  classNameSpinner = "",
  text = "general.common.search",
  type = "submit",
  isProcessing = false,
  onClick,
  ...others
}) {
  const { t } = useTranslation()
  return (
    <Button
      color="primary"
      onClick={onClick}
      className={className}
      type={type}
      {...others}
    >
      <span className={isProcessing ? "me-2" : ""}> {t(text)}</span>
      {isProcessing ? (
        <Spinner className={classNameSpinner} size="sm" color="light" />
      ) : null}
    </Button>
  )
}

ButtonLoading.propTypes = {
  className: PropTypes.string,
  classNameSpinner: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  isProcessing: PropTypes.bool,
  onClick: PropTypes.func,
}

export default ButtonLoading
