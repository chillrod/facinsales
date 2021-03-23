import styled from 'styled-components'
import LinkStyled from '@material-ui/core/Link'

export const NavLink = styled(LinkStyled).attrs({
  align: 'center'
})`
  &.MuiTypography-root {
    color: ${(props) => props.theme.colors.secondBackground};
    margin-right: 1em;
  }
`

export const NavContainer = styled.div`
  display: flex;
  margin-bottom: 0.2em;
`
