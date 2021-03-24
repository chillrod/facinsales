import { ValidationError } from 'yup'

type Errors = {
  [key: string]: string
}

export default function getContactErros(err: ValidationError): Errors {
  const contactErrors: Errors = {}

  err?.inner?.forEach((error) => {
    contactErrors[error.path || ''] = error.message
  })

  return contactErrors
}
