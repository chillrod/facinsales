// import DefaultErrorPage from 'next/error'
import Icon from '@material-ui/core/Icon'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import {
  Container,
  BackgroundContainer,
  HeadingGrid,
  ProductNameType,
  CtaContent,
  CtaParagraphContent,
  CtaParagraphText,
  LinkContainer,
  CtaText
} from '../../styles/template/OtherPages/styles'
import { aboutData } from '../../services/api'
import Link from 'next/link'

const Contato = () => {
  return (
    <BackgroundContainer>
      <LinkContainer>
        <Icon>arrow_back</Icon>
        <Link href="/">Voltar</Link>
      </LinkContainer>

      <Container>
        <HeadingGrid>
          <ProductNameType>{aboutData.Contato.subject}</ProductNameType>
        </HeadingGrid>
        <CtaContent>
          <CtaText>{aboutData.Contato.title}</CtaText>
        </CtaContent>
        <CtaParagraphContent>
          <CtaParagraphText>{aboutData.Contato.contact}</CtaParagraphText>
        </CtaParagraphContent>
      </Container>
      <Contact />
      <Footer />
    </BackgroundContainer>
  )
}

export default Contato
