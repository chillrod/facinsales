import styled from 'styled-components'
import { motion } from 'framer-motion'
import ListItemTextStyled from '@material-ui/core/ListItemText'
import TypographyStyled from '@material-ui/core/Typography'
import LinkStyled from '@material-ui/core/Link'

export const BackgroundContainer = styled.div`
  padding: 1em;
  padding-top: 2em;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background: radial-gradient(
    circle,
    hsla(99, 80%, 10%, 0.1) 19%,
    hsla(1, 2%, 1%, 1) 91%
  );
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

export const FormGrid = styled(motion.div).attrs({})`
  width: 100%;
`

export const FormGridItem = styled(motion.div).attrs({})``

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
