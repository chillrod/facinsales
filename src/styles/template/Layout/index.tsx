import * as S from './styles'
import Head from '../../../components/Head'
import Main from '../../../components/Main'
import Product from '../../../components/Product'
import Contact from '../../../components/Contact'
import Footer from '../../../components/Footer'
const Layout = () => {
  return (
    <>
      <S.HeadGrid>
        <S.HeadCircle />
        <S.HeadBox>
          <Head />
        </S.HeadBox>
      </S.HeadGrid>
      <S.MainGrid>
        <S.MainBox>
          <Main />
        </S.MainBox>
        <S.MainLogo />
        <S.MainCircle />
      </S.MainGrid>
      <S.ProductGrid>
        <S.ProductBox>
          <Product />
        </S.ProductBox>
        <S.ProductLogo />
      </S.ProductGrid>
      <Contact />
      <Footer />
    </>
  )
}

export default Layout
