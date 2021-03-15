import { Container } from './styles'
import Head from '../../../components/Head'
import Section from '../../../components/Section'
import Product from '../../../components/Product'
import Contact from '../../../components/Contact'
import Footer from '../../../components/Footer'
const Layout = () => {
  return (
    <Container>
      <Head />
      <Section />
      <Product />
      <Contact />
      <Footer />
    </Container>
  )
}

export default Layout
