import styled from 'styled-components'
import { motion } from 'framer-motion'
import ContainerStyled from '@material-ui/core/Container'
import GridStyled from '@material-ui/core/Grid'
import BoxStyled from '@material-ui/core/Box'
import ListItemTextStyled from '@material-ui/core/ListItemText'
import IconStyled from '@material-ui/core/Icon'
import TypographyStyled from '@material-ui/core/Typography'
import Image from 'next/image'

export const Container = styled(ContainerStyled).attrs({
  container: true,
  item: true
})``

export const ContentGrid = styled(GridStyled).attrs({
  container: true,
  item: true,
  direction: 'column',
  justify: 'center',
  xs: 12
})``

export const ContentMotion = styled(motion.div)``

export const ContentBox = styled(BoxStyled).attrs({
  mb: 1,
  mt: 1
})``
export const ProductImage = styled(Image).attrs({})`
  object-position: center;
  object-fit: contain;
`

export const ListItemText = styled(ListItemTextStyled).attrs({
  secondaryTypographyProps: {
    component: 'div',
    variant: 'h4'
  }
})``

export const Icon = styled(IconStyled).attrs({})`
  &.MuiIcon-root {
    font-size: 2rem;
    display: flex;
    margin-top: 0.4em;
  }
`

export const ProductHeadGrid = styled(GridStyled).attrs({
  container: true,
  item: true,
  xs: 11
})``

export const ProductHeadBox = styled(BoxStyled).attrs({
  mt: 2
})``

export const ProductHeadText = styled(TypographyStyled).attrs({
  align: 'left',
  variant: 'h5',
  component: 'p'
})`
  &.MuiTypography-root {
    font-weight: 400;
  }
`
