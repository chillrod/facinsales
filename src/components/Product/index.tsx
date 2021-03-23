import { useEffect } from 'react'
import { productData, productHead } from '../../services/api'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

import {
  BackgroundContainer,
  ListItemText,
  TitleContent,
  ContentMotion,
  ProductHeadText,
  ContentGrid,
  ProductImage,
  Container
} from '../../styles/template/Product/styles'

const Content = () => {
  const productTextControl = useAnimation()
  const [productTextRef, productTextInView] = useInView()

  useEffect(() => {
    if (productTextInView) {
      productTextControl.start('visible')
    }
  }, [productTextControl, productTextInView])

  return (
    <>
      <TitleContent
        ref={productTextRef}
        animate={productTextControl}
        initial="hidden"
        transition={{ duration: 0.4 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -10 }
        }}
      >
        <ListItemText
          secondary={<ProductHeadText>{productHead.title}</ProductHeadText>}
        />
      </TitleContent>
      <>
        {productData?.content?.map((content) => (
          <ContentGrid key={content.id}>
            <ContentMotion
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 3
              }}
            >
              <ProductImage
                src={content.href}
                alt={content.name}
                height={content.height}
                width={content.width}
                quality={10}
                priority
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
    <BackgroundContainer>
      <Container>
        <Content />
      </Container>
    </BackgroundContainer>
  )
}

export default Product
