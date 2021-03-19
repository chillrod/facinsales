import styled from 'styled-components'
import ListItemTextStyled from '@material-ui/core/ListItemText'
import TypographyStyled from '@material-ui/core/Typography'
import LinkStyled from '@material-ui/core/Link'

export const BackgroundContainer = styled.div`
  box-shadow: 0 8px 92px 0 rgba(31, 38, 135, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  background: ${(props) => props.theme.colors.background};
  padding-top: 2em;
`

export const Container = styled.footer`
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  margin-top: 1em;
`

export const ContentGrid = styled.div`
  justify-self: center;
`

export const LinkBox = styled.div``

export const ListItemText = styled(ListItemTextStyled).attrs({
  primaryTypographyProps: {
    component: 'div'
  },
  secondaryTypographyProps: {
    component: 'div'
  }
})`
  &.MuiTypography-root {
  }
`

export const ProductName = styled(TypographyStyled).attrs({
  variant: 'h5',
  component: 'h2'
})`
  color: ${(props) => props.theme.colors.text};
`

export const NavLink = styled(LinkStyled).attrs({
  align: 'center'
})``
