import React from "react"
import { Form } from "~/components/Form"
import * as yup from "yup"
import { InputField } from "~/components/Form/InputField"
import { ButtonHover } from "~/components/Button"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { FormSubmitKey } from "./constants"
import "./Layout.scss"
export const FormSubmit = () => {
  const schema = yup.object().shape({})
  const onSubmit = data => {
    console.log("data", data)
  }
  return (
    <Form
      onSubmit={onSubmit}
      schema={schema}
      options={{}}
      style={{ width: "100%" }}
      className="forms-container"
    >
      {({ register }) => {
        return (
          <div className="w-100">
            <InputField
              name={FormSubmitKey.name}
              type="text"
              placeholder="Parent name"
              styleInputField={{
                height: "63px",
                width: "100%",
                marginBottom: "16px",
              }}
            />
            <InputField
              name={FormSubmitKey.email}
              type="text"
              placeholder="Email"
              styleInputField={{
                height: "63px",
                width: "100%",
                marginBottom: "16px",
              }}
            />
            <div
              style={{
                height: "63px",
                border: "1px solid #c9c9c9",
                textAlign: "left",
                fontSize: "18px",
                borderRadius: "8px",
                color: "#333",
                padding: "0 14px",
                marginBottom: "16px",
              }}
              className="booking-fields d-flex align-items-center"
            >
              <PhoneInput
                style={{ border: "none", outline: "none" }}
                defaultCountry={"VN"}
                placeholder="Phone Number"
                {...register(FormSubmitKey.phone)}
              />
            </div>
            <InputField
              name={FormSubmitKey.childName}
              type="child_name"
              placeholder="Child's name"
              styleInputField={{
                height: "63px",
                width: "100%",
                marginBottom: "16px",
              }}
            />
            <InputField
              name={FormSubmitKey.childAge}
              type="number"
              placeholder="Child's age"
              styleInputField={{
                height: "63px",
                width: "100%",
                marginBottom: "30px",
              }}
            />
            <ButtonHover
              content="SUBMIT"
              background="#ef5050"
              color="white"
              styleButton={{
                border: "1px solid #ef5050",
                padding: "9px 15px",
                width: "100%",
                fontSize: "1.3rem",
              }}
              type="submit"
            />
          </div>
        )
      }}
    </Form>
  )
}
