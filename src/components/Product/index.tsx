import { productData, productHead } from '../../services/api'
import mac from '../../../public/animation/mac.json'
import LottieAnimation from '../Animation/'

import {
  ListItemText,
  TitleContent,
  ContentMotion,
  ProductHeadText,
  ContentGrid,
  ProductImage,
  Container
} from '../../styles/template/Product/styles'

const Content = () => {
  return (
    <>
      <TitleContent>
        <ListItemText
          primary={<LottieAnimation lotti={mac} width={200} height={180} />}
          secondary={<ProductHeadText>{productHead.title}</ProductHeadText>}
        />
      </TitleContent>
      <>
        {productData?.content?.map((content) => (
          <ContentGrid key={content.id}>
            <ContentMotion>
              <ProductImage
                src={content.href}
                alt={content.name}
                height={content.height}
                width={content.width}
              />
            </ContentMotion>
          </ContentGrid>
        ))}
      </>
    </>
  )
}

const Product = () => {
  return (
    <Container>
      <Content />
    </Container>
  )
}

export default Product
