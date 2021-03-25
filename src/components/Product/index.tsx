import { useState, useEffect } from 'react'
import SwipeableViews from 'react-swipeable-views'
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
  const [desktopIndex, setDesktopIndex] = useState(0)
  const [mobileIndex, setMobileIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if (desktopIndex === productData?.desktop?.length - 1) {
        setDesktopIndex(0)
      } else {
        setDesktopIndex(desktopIndex + 1)
      }
    }, 3500)
  }, [desktopIndex])

  useEffect(() => {
    setTimeout(() => {
      if (mobileIndex === productData?.mobile?.length - 1) {
        setMobileIndex(0)
      } else {
        setMobileIndex(mobileIndex + 1)
      }
    }, 3500)
  }, [mobileIndex])

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
        <SwipeableViews index={desktopIndex}>
          {productData?.desktop?.map((desktop) => (
            <ContentGrid key={desktop.id}>
              <ContentMotion
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 3
                }}
              >
                <ProductImage
                  src={desktop.href}
                  alt={desktop.name}
                  height={desktop.height}
                  width={desktop.width}
                  quality={10}
                  priority
                />
              </ContentMotion>
            </ContentGrid>
          ))}
        </SwipeableViews>
        <SwipeableViews index={mobileIndex}>
          {productData?.mobile?.map((mobile) => (
            <ContentGrid key={mobile.id}>
              <ContentMotion
                initial={{
                  opacity: 0,
                  y: -50
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 3
                }}
              >
                <ProductImage
                  src={mobile.href}
                  alt={mobile.name}
                  height={mobile.height}
                  width={mobile.width}
                  quality={10}
                  priority
                />
              </ContentMotion>
            </ContentGrid>
          ))}
        </SwipeableViews>
        {productData?.sample?.map((sample) => (
          <ContentGrid key={sample.id}>
            <ContentMotion
              initial={{
                opacity: 0,
                y: -50
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 3
              }}
            >
              <ProductImage
                src={sample.href}
                alt={sample.name}
                height={sample.height}
                width={sample.width}
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
