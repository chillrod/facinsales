import { productData, productHead } from '../../services/api'

import * as S from '../../styles/template/Product/styles'

const Content = () => {
  return (
    <>
      <S.ListItemText
        primary={<S.Icon>{productHead.icon}</S.Icon>}
        secondary={
          <S.ProductHeadGrid>
            <S.ProductHeadBox>
              <S.ProductHeadText>{productHead.title}</S.ProductHeadText>
            </S.ProductHeadBox>
          </S.ProductHeadGrid>
        }
      />
      {productData?.content?.map((content) => (
        <S.ContentGrid key={content.id}>
          <S.ContentMotion>
            <S.ContentBox>
              <S.ProductImage
                src={content.href}
                alt={content.name}
                height={content.height}
                width={content.width}
              />
            </S.ContentBox>
          </S.ContentMotion>
        </S.ContentGrid>
      ))}
    </>
  )
}

const Product = () => {
  return (
    <S.Container>
      <Content />
    </S.Container>
  )
}

export default Product
