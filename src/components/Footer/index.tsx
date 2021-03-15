import { footerData } from '../../services/api'
import * as S from '../../styles/template/Footer/styles'

const Content = () => {
  return (
    <S.ContentGrid>
      <S.ContentBox>
        <S.ProductName>{footerData.productName}</S.ProductName>
        {footerData?.links?.map((link) => (
          <S.LinkBox key={link.id}>
            <S.NavLink href="">{link.title}</S.NavLink>
          </S.LinkBox>
        ))}
      </S.ContentBox>
    </S.ContentGrid>
  )
}

const Footer = () => {
  return (
    <S.Container>
      <Content />
    </S.Container>
  )
}

export default Footer
