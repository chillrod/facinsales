import styled from 'styled-components'
import { motion } from 'framer-motion'
import ListItemTextStyled from '@material-ui/core/ListItemText'
import TypographyStyled from '@material-ui/core/Typography'
import LinkStyled from '@material-ui/core/Link'
import TextFieldStyled from '@material-ui/core/TextField'

export const BackgroundContainer = styled.div`
  padding-top: 3em;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
`

export const Container = styled(motion.div).attrs({})`
  padding: 1em;
  display: flex;
  flex-direction: column;
`

export const ContactGrid = styled(motion.div).attrs({})``

export const ListItemText = styled(ListItemTextStyled).attrs({
  primaryTypographyProps: {
    component: 'div',
    variant: 'h5'
  },
  secondaryTypographyProps: {
    component: 'div'
  }
})``

export const TitleBox = styled(motion.div).attrs({})``

export const InfoTypography = styled(TypographyStyled).attrs({
  align: 'left',
  variant: 'body1'
})``

export const CTATypography = styled(TypographyStyled).attrs({
  align: 'left',
  variant: 'h6',
  color: 'primary'
})``

export const FormGrid = styled(motion.div).attrs({})``

export const FormGridItem = styled(motion.div).attrs({})``

export const TextField = styled(TextFieldStyled).attrs({
  variant: 'filled'
})`
  &.MuiTextField-root {
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 0.6rem;
    background: white;
    opacity: 0.8;
  }
  label {
  }
`

export const FormButtonContainer = styled(motion.div).attrs({})``
export const FormButton = styled(LinkStyled).attrs({
  component: 'button',
  variant: 'button',
  underline: 'none'
})`
  &.MuiLink-root {
    grid-column: 1 / -1;
    justify-self: center;
    grid-row: 4 / 4;
    margin-top: 1em;
    margin-bottom: 1em;
    width: 200px;
    align-self: center;
    display: inline-block;
    padding: 0.7em;
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.primary};

    &:hover {
      &.MuiLink-root {
        background: ${(props) => props.theme.colors.primary};
        border: 2px solid ${(props) => props.theme.colors.textWhite};
        color: ${(props) => props.theme.colors.textWhite};
      }
    }
  }
`
