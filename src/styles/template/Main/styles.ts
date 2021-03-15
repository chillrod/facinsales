import styled from 'styled-components'
import IconStyled from '@material-ui/core/Icon'
import { motion } from 'framer-motion'
import TypographyStyled from '@material-ui/core/Typography'
import ContainerStyled from '@material-ui/core/Container'
import BoxStyled from '@material-ui/core/Box'
import GridStyled from '@material-ui/core/Grid'
import LinkStyled from '@material-ui/core/Link'
import ListItemTextStyled from '@material-ui/core/ListItemText'

export const Container = styled(ContainerStyled).attrs({})``
export const ContainerBackground = styled(motion.div)`
  width: 100%;
  height: 100%;
`

export const ContentGrid = styled(GridStyled).attrs({
  container: true,
  item: true,
  xs: 12
})``

export const ContentMotion = styled(motion.div)`
  padding: 0.7em;
  background: ${(props) =>
    props.color === 'odd'
      ? props.theme.colors.secondBackground
      : props.theme.colors.background};
`

export const ContentGridItem = styled(BoxStyled).attrs({
  mb: 3
})`
  border-radius: 10px;
`

export const Icon = styled(IconStyled).attrs({})`
  &.MuiIcon-root {
    font-size: 2em;
    color: ${(props) => props.theme.colors.primary};
    display: flex;
  }
`

export const ListItemText = styled(ListItemTextStyled).attrs((props) => ({
  primaryTypographyProps: {
    variant: 'h6',
    component: 'span',
    color: 'primary'
  }
}))``
export const Typography = styled(TypographyStyled).attrs({
  variant: 'subtitle1',
  component: 'p'
})``

export const Details = styled(BoxStyled).attrs({
  mt: 1
})``

export const CtaButtonGrid = styled(GridStyled).attrs({
  container: true,
  item: true,
  xs: 7
})``

export const CtaTypography = styled(TypographyStyled).attrs({
  variant: 'h5',
  component: 'p'
})``
export const CtaLinkButton = styled(LinkStyled).attrs({
  component: 'button',
  variant: 'button',
  align: 'left',
  underline: 'none'
})`
  &.MuiLink-root {
    display: inline-block;
    width: 100%;
    margin-top: 1em;
    margin-bottom: 2em;
    padding: 0.7em;
    height: 50px;
    text-align: left;
    color: ${(props) => props.theme.colors.textWhite};
    background: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.primary};

    &:hover {
      &.MuiLink-root {
        background: ${(props) => props.theme.colors.textWhite};
        border: 2px solid ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`
