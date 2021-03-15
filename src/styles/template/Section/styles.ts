import styled from 'styled-components'
import IconStyled from '@material-ui/core/Icon'
import { motion } from 'framer-motion'
import TypographyStyled from '@material-ui/core/Typography'
import LinkStyled from '@material-ui/core/Link'
import ListItemTextStyled from '@material-ui/core/ListItemText'

export const Container = styled(motion.section)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto 1fr 1fr auto;
  padding: 1em;
`

export const SectionGrid = styled(motion.div).attrs({})`
  grid-column: 1 / -1;
`

export const SectionTransitionGrid = styled(motion.div)`
  grid-column: 1 / -1;
  padding-bottom: 1em;
`

export const SectionGridItemMotion = styled(motion.div)`
  padding: 1em;
  margin-bottom: 0.6em;
  border-radius: 10px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`

export const SectionGridItem = styled(motion.div).attrs({})``

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
  variant: 'body1',
  component: 'span'
})``

export const Details = styled(motion.div).attrs({})``

export const CtaButtonGrid = styled(motion.div).attrs({})`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const CtaTypography = styled(TypographyStyled).attrs({
  variant: 'h6',
  component: 'span',
  color: 'primary',
  align: 'center'
})``
export const CtaLinkButton = styled(LinkStyled).attrs({
  component: 'button',
  variant: 'button',
  underline: 'none'
})`
  &.MuiLink-root {
    grid-column: 1 / -1;
    justify-self: center;
    grid-row: 4 / 4;
    border-radius: 20px;
    margin-top: 1em;
    margin-bottom: 1em;
    width: 200px;
    align-self: center;
    display: inline-block;
    padding: 0.7em;
    color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.textWhite};
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
