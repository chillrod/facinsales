import styled from 'styled-components'
import ListItemTextStyled from '@material-ui/core/ListItemText'

export const Container = styled.div`
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#3D71FF", endColorstr="#FEFEFF", GradientType=1 );
  display: flex;
  flex: 1;
  margin: 0 auto;

  @media (min-width: 800px) {
    padding: 2.5em 3em;
  }
`

export const Background = styled.div`
  background-size: 100%;
`

export const ContainerPage = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
`

export const ContactGrid = styled.div`
  @media (min-width: 800px) {
    display: flex;
    padding: 2em;
    gap: 2em;
    flex-direction: row;
  }
`

export const ListItemText = styled(ListItemTextStyled).attrs({
  primaryTypographyProps: {
    component: 'div',
    variant: 'h2'
  },
  secondaryTypographyProps: {
    component: 'div',
    variant: 'h4',
    align: 'left',
    color: 'primary'
  }
})`
  color: white;
`
