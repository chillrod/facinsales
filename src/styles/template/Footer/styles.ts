import styled from 'styled-components'
import ListItemTextStyled from '@material-ui/core/ListItemText'
import TypographyStyled from '@material-ui/core/Typography'
import LinkStyled from '@material-ui/core/Link'

export const BackgroundContainer = styled.div`
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
`

export const Container = styled.footer`
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  margin-top: 1em;
`

export const ContentGrid = styled.div``

export const LinkBox = styled.div``

export const ListItemText = styled(ListItemTextStyled).attrs({
  primaryTypographyProps: {
    component: 'div',
    variant: 'body1'
  },
  secondaryTypographyProps: {
    component: 'div'
  }
})``

export const ProductName = styled(TypographyStyled).attrs({
  variant: 'body1',
  component: 'h2'
})``

export const NavLink = styled(LinkStyled).attrs({
  align: 'left'
})``
