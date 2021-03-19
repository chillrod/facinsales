import styled from 'styled-components'
import { motion } from 'framer-motion'
import ListItemTextStyled from '@material-ui/core/ListItemText'
import TypographyStyled from '@material-ui/core/Typography'
import LinkStyled from '@material-ui/core/Link'
import TextFieldStyled from '@material-ui/core/TextField'

export const BackgroundContainer = styled.div`
  padding-top: 1em;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  padding-bottom: 4em;
`

export const Container = styled(motion.div).attrs({})`
  padding: 1em;
  display: flex;
  flex-direction: column;
`

export const ContactGrid = styled(motion.div).attrs({})`
  @media (min-width: 800px) {
    display: flex;
    padding: 2em;
    gap: 2em;
    flex-direction: row;
  }
`

export const ListItemText = styled(ListItemTextStyled).attrs({
  primaryTypographyProps: {
    component: 'div',
    variant: 'h3'
  },
  secondaryTypographyProps: {
    component: 'div',
    align: 'left'
  }
})``

export const TitleBox = styled(motion.div).attrs({})``

export const InfoTypography = styled(TypographyStyled).attrs({
  variant: 'h5',
  component: 'span'
})`
  &.MuiTypography-root {
    color: ${(props) => props.theme.colors.text};
    font-weight: 300;
  }
`

export const CTATypography = styled(TypographyStyled).attrs({
  align: 'left',
  variant: 'h2'
})`
  &.MuiTypography-root {
    color: ${(props) => props.theme.colors.secondBackground};
  }
`

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
    background: ${(props) => props.theme.colors.secondBackground};
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
    justify-self: start;
    grid-row: 4 / 4;
    width: 300px;
    font-size: 1rem;
    margin-top: 1em;
    margin-bottom: 1em;
    align-self: center;
    display: inline-block;
    padding: 0.9em;
    color: ${(props) => props.theme.colors.text};
    border: 2px solid ${(props) => props.theme.colors.primary};

    &:hover {
      &.MuiLink-root {
        background: ${(props) => props.theme.colors.background};
        border: 2px solid ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.text};
      }
    }
  }
`
