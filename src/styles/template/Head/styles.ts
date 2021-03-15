import styled from 'styled-components'
import { motion } from 'framer-motion'
import TypographyStyled from '@material-ui/core/Typography'
import LinkStyled from '@material-ui/core/Link'
import Image from 'next/image'
import ListItemTextStyled from '@material-ui/core/ListItemText'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto auto 1fr auto;
  grid-column: 1 / -1;
  padding: 1em;
`

export const HeadingGrid = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  align-self: start;
  justify-self: start;
  margin-top: 0.6em;
`

export const ProductNameType = styled(TypographyStyled).attrs({
  variant: 'h6',
  component: 'div'
})``

export const CtaContent = styled(motion.div)`
  grid-column: 1 / -1;
  grid-row: 2 / 2;
  justify-self: center;
  align-self: end;
  margin-top: 1em;
`

export const CtaText = styled(TypographyStyled).attrs({
  align: 'center',
  variant: 'h3',
  component: 'h1'
})`
  &.MuiTypography-root {
    font-weight: 600;
  }
`

export const CtaParagraphContent = styled(motion.div)`
  grid-column: 1 / -1;
  grid-row: 3 / 3;
  align-self: center;
  margin-top: 1em;
`

export const CtaParagraphText = styled(TypographyStyled).attrs({
  align: 'left',
  variant: 'h6',
  component: 'div'
})`
  &.MuiTypography-root {
    font-weight: 400;
  }
`
export const LogoContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  align-self: end;
  justify-self: end;
  opacity: 0.3;
  z-index: -99;
`
export const CtaLinkButton = styled(LinkStyled).attrs((props) => ({
  component: 'button',
  variant: 'button',
  underline: 'none'
}))`
  &.MuiLink-root {
    grid-column: 1 / -1;
    justify-self: start;
    grid-row: 4 / 4;
    border-radius: 20px;
    margin-top: 1em;
    width: 200px;
    align-self: start;
    display: inline-block;
    padding: 0.7em;
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

export const SalesContainer = styled(motion.div)`
  grid-column: 1 / -1;
  grid-row: 5 / 5;
  justify-self: start;
  align-self: end;
`

export const SalesLink = styled(LinkStyled).attrs((props) => ({
  variant: 'h6',
  component: 'span',
  color: 'primary'
}))``
export const ListItemText = styled(ListItemTextStyled).attrs({
  secondaryTypographyProps: {
    component: 'div'
  }
})``

export const TechImage = styled(Image).attrs({})`
  object-fit: contain;
`
