import styled from 'styled-components'
import { motion } from 'framer-motion'
import ListItemTextStyled from '@material-ui/core/ListItemText'
import IconStyled from '@material-ui/core/Icon'
import TypographyStyled from '@material-ui/core/Typography'
import Image from 'next/image'

export const BackgroundContainer = styled.div`
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
`

export const Container = styled(motion.section).attrs({})`
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: masonry;
`

export const ContentGrid = styled(motion.div).attrs({})``
export const TitleContent = styled(motion.div)`
  grid-column: 1 / -1;
  grid-row: 1;
  align-self: start;
  margin-bottom: 1em;
`

export const ContentMotion = styled(motion.div)``

export const ProductImage = styled(Image).attrs({})`
  object-fit: contain;
`

export const ListItemText = styled(ListItemTextStyled).attrs({
  primaryTypographyProps: {
    component: 'div',
    variant: 'h6',
    color: 'primary'
  }
})``

export const Icon = styled(IconStyled).attrs({})`
  &.MuiIcon-root {
    font-size: 2rem;
    display: flex;
    margin-top: 0.4em;
  }
`

export const ProductHeadGrid = styled(motion.div).attrs({})``

export const ProductHeadBox = styled(motion.div).attrs({})``

export const ProductHeadText = styled(TypographyStyled).attrs({
  variant: 'h6',
  component: 'span',
  color: 'primary'
})``
