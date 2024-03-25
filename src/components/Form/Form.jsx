import { forwardRef, useCallback, useImperativeHandle, useMemo } from "react"
import PropTypes from "prop-types"
import { FormProvider, useFieldArray, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { cloneDeep } from "lodash"
import { SpinnerLoading } from "./SpinnerLoading"

export const Form = forwardRef(
  (
    {
      schema,
      children,
      options = {},
      onSubmit,
      isLoading = false,
      fieldArrayName = "",
      ...props
    },
    ref
  ) => {
    const methods = useForm({
      resolver: schema && yupResolver(schema),
      ...options,
      shouldFocusError: true,
    })

    const fieldArrayMethods = useFieldArray({
      control: methods.control,
      name: fieldArrayName,
    })

    const handleSubmit = useCallback(
      (dataForm, event) => {
        let dataFormHere = cloneDeep(dataForm)
        onSubmit(dataFormHere, methods, event)
      },
      [methods, onSubmit]
    )

    const handleAffectSubmitForm = useCallback(
      event => {
        return methods.handleSubmit(handleSubmit)(event)
      },
      [handleSubmit, methods]
    )

    const renderFormChildren = useMemo(() => {
      return children(methods, fieldArrayMethods)
    }, [children, fieldArrayMethods, methods])

    useImperativeHandle(
      ref,
      () => ({
        methods,
      }),
      [methods]
    )

    return (
      <>
        {isLoading && <SpinnerLoading />}
        <FormProvider {...methods}>
          <form method="post" onSubmit={handleAffectSubmitForm} {...props}>
            {renderFormChildren}
          </form>
        </FormProvider>
      </>
    )
  }
)

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.any,
  schema: PropTypes.object,
  options: PropTypes.object,
  fieldArrayName: PropTypes.string,
  isLoading: PropTypes.bool,
}
