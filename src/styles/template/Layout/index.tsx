import { Container, Background } from './styles'
import Head from '../../../components/Head'
import Section from '../../../components/Section'
import Product from '../../../components/Product'
import Contact from '../../../components/Contact'
import Footer from '../../../components/Footer'

const Layout = () => {
  return (
    <Container>
      <Background>
        <Head />
        <Section />
        <Product />
        <Contact />
        <Footer />
      </Background>
    </Container>
  )
}

export default Layout
