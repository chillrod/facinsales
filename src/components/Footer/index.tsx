import { footerData } from '../../services/api'
import {
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
          <NavLink href="">{link.title}</NavLink>
        </LinkBox>
      ))}
    </ContentGrid>
  )
}

const Footer = () => {
  return (
    <Container>
      <Content />
    </Container>
  )
}

export default Footer
