import Link from 'next/link'
import Icon from '@material-ui/core/Icon'
import { aboutData } from '../../services/api'
import { LinkContainer } from '../../styles/template/OtherPages/styles'
import {
  BackgroundContainer,
  Container,
  HeadMenu,
  HeadingGrid,
  ProductNameType,
  CtaContent,
  CtaText,
  CtaParagraphContent,
  CtaParagraphText
} from '../../styles/template/Head/styles'
import Footer from 'components/Footer'
import Contact from 'components/Contact'

const HeadText = () => {
  return (
    <>
      <HeadingGrid
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeIn',
          duration: 0.4
        }}
      >
        <HeadMenu>
          <ProductNameType>{aboutData.Sobre.title}</ProductNameType>
        </HeadMenu>
      </HeadingGrid>

      <CtaContent
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeIn',
          duration: 0.6
        }}
      >
        <CtaText>{aboutData.Sobre.subject}</CtaText>
      </CtaContent>
      <CtaParagraphContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeIn',
          duration: 0.4
        }}
      >
        <CtaParagraphText>{aboutData.Sobre.contact}</CtaParagraphText>
      </CtaParagraphContent>
    </>
  )
}

const Head = () => {
  return (
    <>
      <BackgroundContainer>
        <LinkContainer>
          <Icon>arrow_back</Icon>
          <Link href="/">Voltar</Link>
        </LinkContainer>
        <Container>
          <HeadText />
        </Container>
      </BackgroundContainer>
      <Contact />
      <Footer />
    </>
  )
}

export default Head
