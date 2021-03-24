/* eslint-disable @typescript-eslint/ban-ts-comment */
import { InputHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  multiline?: boolean
  rows?: number
}

import { TextField } from './styles'
import { Typography } from '@material-ui/core'

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null)

  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <>
      {/*@ts-ignore */}
      <TextField defaultValue={defaultValue} inputRef={inputRef} {...rest} />
      <Typography variant="body2" color="secondary">
        {error}
      </Typography>
    </>
  )
}

export default Input
