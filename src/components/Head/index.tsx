// import { useState } from 'react'
import Image from 'next/image'
import { headData } from '../../services/api'
import {
  BackgroundContainer,
  Container,
  Desktop,
  DesktopImageContainer,
  MediaQuery,
  HeadingGrid,
  ProductNameType,
  CtaContent,
  CtaText,
  CtaParagraphContent,
  CtaParagraphText,
  CtaLinkButton,
  ListItemText,
  TechImage,
  SalesLink,
  SalesContainer,
  LogoContainer
} from '../../styles/template/Head/styles'
import { motion } from 'framer-motion'

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
        <ProductNameType>{headData.product}</ProductNameType>
      </HeadingGrid>

      <CtaContent
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeIn',
          duration: 0.6
        }}
      >
        <CtaText>{headData.ctaText}</CtaText>
      </CtaContent>
      <CtaParagraphContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeIn',
          duration: 0.4
        }}
      >
        <CtaParagraphText>{headData.ctaParagraph}</CtaParagraphText>
      </CtaParagraphContent>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeIn',
          duration: 0.4
        }}
      >
        <CtaLinkButton>{headData.buttonText}</CtaLinkButton>
      </motion.div>

      <SalesContainer>
        <ListItemText
          primary={<SalesLink href="#">{headData.linkContent}</SalesLink>}
          secondary={headData?.techData?.map((tech) => (
            <TechImage
              key={tech.id}
              src={tech.href}
              alt={tech.name}
              width={tech.width}
              height={tech.height}
            />
          ))}
        />
      </SalesContainer>
    </>
  )
}

const HeadDesktopContent = () => {
  return (
    <Desktop>
      <DesktopImageContainer
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          ease: 'easeIn',
          duration: 0.9
        }}
      >
        <Image
          src={headData.techDesktop.imageHref}
          height={headData.techDesktop.height}
          width={headData.techDesktop.width}
          quality={10}
          priority
        />
      </DesktopImageContainer>
    </Desktop>
  )
}

const Head = () => {
  return (
    <BackgroundContainer>
      <MediaQuery>
        <LogoContainer />
        <Container>
          <HeadText />
        </Container>
        <HeadDesktopContent />
      </MediaQuery>
    </BackgroundContainer>
  )
}

export default Head
