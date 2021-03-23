import TextFieldStyled from '@material-ui/core/TextField'
import styled from 'styled-components'
export const TextField = styled(TextFieldStyled).attrs({
  variant: 'filled'
})`
  &.MuiTextField-root {
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 0.6rem;
    background: ${(props) => props.theme.colors.secondBackground};
    opacity: 0.8;
  }
  label {
  }
`
