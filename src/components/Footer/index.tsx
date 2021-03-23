import { footerData } from '../../services/api'
import {
  BackgroundContainer,
  ContentGrid,
  ProductName,
  LinkBox,
  NavLink,
  Container
} from '../../styles/template/Footer/styles'

const Content = () => {
  return (
    <ContentGrid>
      <ProductName>{footerData.productName}</ProductName>
      {footerData?.links?.map((link) => (
        <LinkBox key={link.id}>
          <NavLink href={`/about/${link.title}`}>{link.title}</NavLink>
        </LinkBox>
      ))}
    </ContentGrid>
  )
}

const Footer = () => {
  return (
    <BackgroundContainer>
      <Container>
        <Content />
      </Container>
    </BackgroundContainer>
  )
}

export default Footer
