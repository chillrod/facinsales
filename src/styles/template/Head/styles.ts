import styled from 'styled-components'
import { motion } from 'framer-motion'
import TypographyStyled from '@material-ui/core/Typography'
import BoxStyled from '@material-ui/core/Box'
import ContainerStyled from '@material-ui/core/Container'
import GridStyled from '@material-ui/core/Grid'
import LinkStyled from '@material-ui/core/Link'
import Image from 'next/image'
import ListItemTextStyled from '@material-ui/core/ListItemText'

export const Container = styled(ContainerStyled).attrs({
  container: true,
  item: true,
  xs: 12
})``

export const ContainerBackground = styled(motion.div)``

export const HeadingGrid = styled(GridStyled).attrs({
  container: true,
  item: true,
  xs: 5
})``

export const ProductBox = styled(BoxStyled).attrs({
  mt: 4
})`
  &.MuiBox-root {
    padding-bottom: 0;
  }
`

export const ProductName = styled(motion.div)``

export const ProductNameType = styled(TypographyStyled).attrs({
  align: 'left',
  variant: 'body1',
  component: 'div'
})``

export const CtaBox = styled(GridStyled).attrs({
  container: true,
  item: true,
  xs: 12
})``

export const CtaContent = styled(motion.div)``

export const CtaText = styled(TypographyStyled).attrs({
  align: 'left',
  variant: 'h3',
  component: 'h1'
})`
  &.MuiTypography-root {
    font-weight: 400;
  }
`

export const CtaParagraphBox = styled(BoxStyled).attrs({})`
  &.MuiBox-root {
    padding-top: 1em;
  }
`

export const CtaParagraphContent = styled(motion.div)``

export const CtaParagraphText = styled(TypographyStyled).attrs({
  align: 'left',
  variant: 'body1',
  component: 'div'
})`
  &.MuiTypography-root {
  }
`
export const LogoButtonGrid = styled(GridStyled).attrs({
  container: true,
  direction: 'row',
  justify: 'space-between'
})``
export const CtaButtonContainer = styled(GridStyled).attrs({
  container: true,
  item: true,
  justify: 'flex-start',
  xs: 6
})``
export const LogoContainer = styled(GridStyled).attrs({
  container: true,
  item: true,
  justify: 'flex-end',
  xs: 3
})``
export const CtaLinkButton = styled(LinkStyled).attrs((props) => ({
  component: 'button',
  variant: 'button',
  align: 'left',
  underline: 'none'
}))`
  &.MuiLink-root {
    display: inline-block;
    width: 100%;
    margin-top: 1em;
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

export const SalesBox = styled(BoxStyled).attrs({
  mt: 1
})``

export const SalesLink = styled(LinkStyled).attrs((props) => ({
  align: 'left'
}))`
  font-size: 1rem;
  margin: 0;
`
export const ListItemText = styled(ListItemTextStyled).attrs({
  secondaryTypographyProps: {
    component: 'div'
  }
})``

export const TechContainer = styled(motion.div)``

export const TechImage = styled(Image).attrs({})`
  object-fit: contain;
`
