import styled from 'styled-components'
import ContainerStyled from '@material-ui/core/Container'
import GridStyled from '@material-ui/core/Grid'
import BoxStyled from '@material-ui/core/Box'
import ListItemTextStyled from '@material-ui/core/ListItemText'
import TypographyStyled from '@material-ui/core/Typography'
import LinkStyled from '@material-ui/core/Link'
export const Container = styled(ContainerStyled).attrs({})``

export const ContentGrid = styled(GridStyled).attrs({
  container: true,
  item: true,
  direction: 'column',
  justify: 'center'
})``

export const ContentBox = styled(BoxStyled).attrs({
  mt: 2
})``
export const LinkBox = styled(BoxStyled).attrs({
  mt: 1
})``

export const ListItemText = styled(ListItemTextStyled).attrs({
  primaryTypographyProps: {
    component: 'div',
    variant: 'h2'
  },
  secondaryTypographyProps: {
    component: 'div'
  }
})``

export const ProductName = styled(TypographyStyled).attrs({
  variant: 'h5',
  component: 'h2'
})``

export const NavLink = styled(LinkStyled).attrs({
  align: 'left'
})`
  font-size: 1.3em;
  margin: 0;
`
