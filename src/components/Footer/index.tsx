import { footerData } from '../../services/api'
import Icon from '@material-ui/core/Icon'
import {
  BackgroundContainer,
  ContentGrid,
  ProductName,
  LinkBox,
  NavLink,
  ListItemText,
  Container
} from '../../styles/template/Footer/styles'

const Map = () => {
  return (
    <div>
      <ListItemText primary="Estamos localizados em" />
      <iframe
        width="500"
        height="200"
        src="https://maps.google.com/maps?q=Facile%20Sistemas%20Centro%20Empresarial%20da%20Serra%20-%20Sala%20523,%20Av.%20Eldes%20Scherrer%20Souza,%201025%20-%20Parque%20Res.%20Laranjeiras,%20Serra%20-%20ES,%2029165-680&t=&z=13&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </div>
  )
}
const Content = () => {
  return (
    <ContentGrid>
      <ProductName>{footerData.productName}</ProductName>
      {footerData?.links?.map((link) => (
        <LinkBox key={link.id}>
          <NavLink href={`/about/${link.title}`}>{link.title}</NavLink>
        </LinkBox>
      ))}
      <ListItemText
        primary={
          <div>
            <Icon>phone</Icon>
            Telefone 27 3065-5565
          </div>
        }
        secondary={
          <div>
            <Icon>place</Icon>
            Av. Eldes Scherrer Souza, Centro Empresarial da Serra, Laranjeiras,
            Serra – ES
          </div>
        }
      />
      <ListItemText
        secondary={
          <div>
            <Icon>mail</Icon>
            atendimento@facilesistemas.com.br
          </div>
        }
      />
    </ContentGrid>
  )
}

const Footer = () => {
  return (
    <BackgroundContainer>
      <Container>
        <Content />
        <Map />
      </Container>
    </BackgroundContainer>
  )
}

export default Footer
