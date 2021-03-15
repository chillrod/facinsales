import styled from 'styled-components'
import { motion } from 'framer-motion'
import ContainerStyled from '@material-ui/core/Container'
import GridStyled from '@material-ui/core/Grid'
import BoxStyled from '@material-ui/core/Box'
export const Container = styled(ContainerStyled).attrs({})`
  background: ${(props) => props.theme.colors.background};
`

export const HeadGrid = styled(GridStyled).attrs({})`
  &.MuiGrid-root {
    background: linear-gradient(160deg, #e8f9ff 40%, #ffffff 0%);
  }
`
export const HeadBox = styled(BoxStyled).attrs({})`
  &.MuiBox-root {
    z-index: 200;
  }
`
export const HeadCircle = styled(motion.div)`
  z-index: 1;
  background: ${(props) => props.theme.colors.primary};
  width: 300px;
  height: 300px;
  opacity: 0.1;
  border-radius: 50%;
  position: absolute;
  top: -30px;
  left: -50px;
`

export const MainGrid = styled(GridStyled).attrs({
  container: true
})`
  &.MuiGrid-root {
  }
`
export const MainBox = styled(BoxStyled).attrs({})`
  &.MuiBox-root {
    z-index: 200;
  }
`
export const MainLogo = styled(motion.div)`
  background: ${(props) => props.theme.colors.primary};
  width: 250px;
  height: 250px;
  opacity: 0.1;
  border-radius: 50%;
  position: absolute;
  top: 600px;
  right: 2px;
`
export const MainCircle = styled(motion.div)`
  background: ${(props) => props.theme.colors.primary};
  width: 250px;
  height: 250px;
  opacity: 0.1;
  border-radius: 50%;
  position: absolute;
  top: 900px;
  left: -200px;
`

export const ProductGrid = styled(GridStyled).attrs({
  container: true
})`
  &.MuiGrid-root {
    background: linear-gradient(-135deg, #e8f9ff 40%, #d0e2ff 0%);
  }
`
export const ProductBox = styled(BoxStyled).attrs({})`
  &.MuiBox-root {
    z-index: 200;
  }
`
export const ProductLogo = styled(motion.div)`
  background: ${(props) => props.theme.colors.secondBackground};
  width: 250px;
  height: 250px;
  opacity: 0.1;
  border-radius: 50%;
  position: absolute;
  top: 900px;
  right: 2px;
`
export const ProductCircle = styled(motion.div)`
  background: ${(props) => props.theme.colors.primary};
  width: 250px;
  height: 250px;
  opacity: 0.1;
  border-radius: 50%;
  position: absolute;
  top: 900px;
  left: -200px;
`
