import dynamic from 'next/dynamic'
import { Container, Background } from './styles'
const DynamicHead = dynamic(() => import('../../../components/Head'))
const DynamicSection = dynamic(() => import('../../../components/Section'))
const DynamicProduct = dynamic(() => import('../../../components/Product'))
const DynamicContact = dynamic(() => import('../../../components/Contact'))
const DynamicFooter = dynamic(() => import('../../../components/Footer'))

const Layout = () => {
  return (
    <Container>
      <Background>
        <DynamicHead />
        <DynamicSection />
        <DynamicProduct />
        <DynamicContact />
        <DynamicFooter />
      </Background>
    </Container>
  )
}

export default Layout
