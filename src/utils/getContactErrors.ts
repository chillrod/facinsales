import { ValidationError } from 'yup'

type Errors = {
  [key: string]: string
}

export default function getContactErros(err: ValidationError): Errors {
  const contactErrors: Errors = {}
  console.log({ err })

  err.inner.forEach((error) => {
    contactErrors[error.path] = error.message
  })

  return contactErrors
}
