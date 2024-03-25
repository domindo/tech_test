import PropTypes from "prop-types"
import { useFormContext } from "react-hook-form"
import { Input, FormFeedback } from "reactstrap"
import "./Form.scss"

export const InputField = ({
  name,
  disabled = false,
  type = "text",
  isShowError = true,
  styleInputField,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const { ref, ...registerRes } = register(name)
  return (
    <>
      <Input
        type={type}
        className="form-control shadow-none border-none"
        id={`validationTooltip-${name}`}
        invalid={!!errors[name]}
        innerRef={ref}
        disabled={disabled}
        {...registerRes}
        style={{
          backgroundColor: disabled ? "hsl(0, 0%, 95%)" : "",
          border: "1px solid #c9c9c9",
          textAlign: "left",
          fontSize: "18px",
          borderRadius: "8px",
          color: "#333",
          ...styleInputField,
        }}
        {...props}
      />
      {isShowError && errors[name]?.message && (
        <FormFeedback>{errors[name]?.message}</FormFeedback>
      )}
    </>
  )
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.any,
  error: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  isShowError: PropTypes.bool,
  styleInputField: PropTypes.any,
  styleInputGroup: PropTypes.any,
}
