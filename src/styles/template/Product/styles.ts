import styled from 'styled-components'
import { motion } from 'framer-motion'
import ListItemTextStyled from '@material-ui/core/ListItemText'
import IconStyled from '@material-ui/core/Icon'
import TypographyStyled from '@material-ui/core/Typography'
import Image from 'next/image'

export const BackgroundContainer = styled.div`
  padding: 3em;
  padding-top: 2em;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background: radial-gradient(
    circle,
    hsla(99, 80%, 10%, 0.1) 19%,
    hsla(1, 2%, 1%, 1) 91%
  );
`

export const Container = styled(motion.section).attrs({})`
  display: grid;
`

export const ContentGrid = styled(motion.div).attrs({})`
  margin: 0 auto;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`
export const TitleContent = styled(motion.div)`
  grid-column: 1 / -1;
  grid-row: 1;
  align-self: start;
  margin-bottom: 1em;
`

export const ContentMotion = styled(motion.div)`
  justify-self: center;
  align-self: center;
`

export const ProductImage = styled(Image).attrs({})`
  object-fit: contain;
  display: block;
`

export const ListItemText = styled(ListItemTextStyled).attrs({
  primaryTypographyProps: {
    component: 'div',
    variant: 'h6'
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
  variant: 'h2',
  component: 'p'
})`
  &.MuiTypography-root {
    color: ${(props) => props.theme.colors.secondBackground};
  }
`
