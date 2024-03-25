import * as yup from "yup"
import {
  MAX_POINT,
  MIN_POINT,
  REGEX_NO_SPECIAL_UPPERCASE_CHARACTER_MAX_LENGTH_500,
} from "~/constants"

export const schemaFieldNumber = ({
  min = MIN_POINT,
  max = MAX_POINT,
  minMessage = "",
  maxMessage = "",
}) => {
  return yup
    .number()
    .transform(value => (Number.isNaN(value) ? undefined : value))
    .optional()
    .min(min, minMessage)
    .max(max, maxMessage)
}

export const schemaFieldNumberMoreThan = ({
  min = MIN_POINT,
  max = MAX_POINT,
  minMessage = "",
  maxMessage = "",
}) => {
  return yup
    .number()
    .transform(value => (Number.isNaN(value) ? undefined : value))
    .optional()
    .moreThan(min, minMessage)
    .max(max, maxMessage)
}

export const schemaFieldPattern = ({
  pattern = REGEX_NO_SPECIAL_UPPERCASE_CHARACTER_MAX_LENGTH_500,
  message = "",
}) => {
  return yup.string().optional().nullable().matches(pattern, message)
}

export const schemaRequiredNumber = ({
  messageRequired = "",
  maxLength = 3,
  messageMaxLength = "",
  messageCommon = "",
}) => {
  return yup
    .number()
    .required(messageRequired)
    .test("len", messageMaxLength, val => val.toString().length <= maxLength)
    .typeError(messageCommon)
}
