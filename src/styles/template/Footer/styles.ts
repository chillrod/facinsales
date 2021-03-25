import styled from 'styled-components'
import ListItemTextStyled from '@material-ui/core/ListItemText'
import TypographyStyled from '@material-ui/core/Typography'
import LinkStyled from '@material-ui/core/Link'

export const BackgroundContainer = styled.div`
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background: ${(props) => props.theme.colors.secondary};
  padding: 2em;
`

export const Container = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`

export const ContentGrid = styled.div``

export const LinkBox = styled.div``

export const MapContainer = styled.div`
  width: 85%;
`

export const ListItemText = styled(ListItemTextStyled).attrs({
  primaryTypographyProps: {
    component: 'div',
    variant: 'h6'
  },
  secondaryTypographyProps: {
    component: 'div',
    variant: 'body1'
  }
})`
  div {
    color: ${(props) => props.theme.colors.text};
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
