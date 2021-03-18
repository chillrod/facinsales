import Image from 'next/image'
import { headData } from '../../services/api'
import {
  BackgroundContainer,
  Container,
  HeadingGrid,
  ProductNameType,
  CtaContent,
  CtaText,
  CtaParagraphContent,
  CtaParagraphText,
  CtaLinkButton,
  LogoContainer,
  ListItemText,
  TechImage,
  SalesLink,
  SalesContainer
} from '../../styles/template/Head/styles'

const HeadText = () => {
  return (
    <>
      <HeadingGrid>
        <ProductNameType>{headData.product}</ProductNameType>
      </HeadingGrid>

      <CtaContent>
        <CtaText>{headData.ctaText}</CtaText>
      </CtaContent>
      <CtaParagraphContent>
        <CtaParagraphText>{headData.ctaParagraph}</CtaParagraphText>
      </CtaParagraphContent>
      <CtaLinkButton>{headData.buttonText}</CtaLinkButton>
      <LogoContainer>
        <Image src="/img/logo.png" alt="Facin" width={100} height={100} />
      </LogoContainer>
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
const Head = () => {
  return (
    <BackgroundContainer>
      <Container>
        <HeadText />
      </Container>
    </BackgroundContainer>
  )
}

export default Head
