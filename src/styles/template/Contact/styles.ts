import styled from 'styled-components'
import { motion } from 'framer-motion'
import ContainerStyled from '@material-ui/core/Container'
import GridStyled from '@material-ui/core/Grid'
import BoxStyled from '@material-ui/core/Box'
import ListItemTextStyled from '@material-ui/core/ListItemText'
import TypographyStyled from '@material-ui/core/Typography'
import ButtonStyled from '@material-ui/core/Button'
import Image from 'next/image'
import TextFieldStyled from '@material-ui/core/TextField'
export const Container = styled(ContainerStyled).attrs({})``

export const ContentGrid = styled(GridStyled).attrs({
  container: true,
  item: true,
  direction: 'column',
  justify: 'center'
})``

export const ContentMotion = styled(motion.div)``

export const ContentBox = styled(BoxStyled).attrs({
  mt: 2
})``
export const ProductImage = styled(Image).attrs({})`
  object-fit: cover;
  border-radius: 10px;
  object-position: left;
`

export const ListItemText = styled(ListItemTextStyled).attrs({
  primaryTypographyProps: {
    component: 'div',
    variant: 'h5'
  },
  secondaryTypographyProps: {
    component: 'div'
  }
})``

export const TitleBox = styled(BoxStyled).attrs({
  mt: 2
})``

export const InfoTypography = styled(TypographyStyled).attrs({
  align: 'left',
  variant: 'body1'
})``

export const FormGrid = styled(GridStyled).attrs({
  container: true,
  direction: 'row'
})``

export const FormGridItem = styled(GridStyled).attrs({
  item: true,
  xs: 12
})``

export const FormBox = styled(BoxStyled).attrs({})``
export const TextField = styled(TextFieldStyled).attrs({
  variant: 'filled'
})`
  &.MuiTextField-root {
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 0.6rem;
    background: white;
    opacity: 0.8;
  }
  label {
  }
`

export const FormButtonContainer = styled(BoxStyled).attrs({
  mt: 2
})`
  &.MuiBox-root {
    width: 200px;
  }
`
export const FormButton = styled(ButtonStyled).attrs({
  variant: 'outlined'
})`
  &.MuiButton-root {
    border-radius: 0px;
    width: 80%;
    padding: 0.9em;
    background: ${(props) => props.theme.colors.textWhite};
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.primary};

    &:hover {
      &.MuiButton-root {
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.textWhite};
      }
    }
  }
`
