import Image from 'next/image'
import { headData } from '../../services/api'
import * as S from '../../styles/template/Head/styles'

const HeadText = () => {
  return (
    <>
      <S.HeadingGrid>
        <S.ProductBox>
          <S.ProductName>
            <S.ProductNameType>{headData.product}</S.ProductNameType>
          </S.ProductName>
        </S.ProductBox>
      </S.HeadingGrid>

      <S.CtaBox>
        <S.CtaContent>
          <S.CtaText>{headData.ctaText}</S.CtaText>
        </S.CtaContent>
      </S.CtaBox>

      <S.CtaParagraphBox>
        <S.CtaParagraphContent>
          <S.CtaParagraphText>{headData.ctaParagraph}</S.CtaParagraphText>
        </S.CtaParagraphContent>
        <S.LogoButtonGrid>
          <S.CtaButtonContainer>
            <S.CtaLinkButton>{headData.buttonText}</S.CtaLinkButton>
          </S.CtaButtonContainer>
          <S.LogoContainer>
            <Image src="/img/logo.png" alt="Facin" width={100} height={100} />
          </S.LogoContainer>
        </S.LogoButtonGrid>
      </S.CtaParagraphBox>

      <S.SalesBox>
        <S.ListItemText
          primary={<S.SalesLink href="#">{headData.linkContent}</S.SalesLink>}
          secondary={headData?.techData?.map((tech) => (
            <S.TechImage
              key={tech.id}
              src={tech.href}
              alt={tech.name}
              width={tech.width}
              height={tech.height}
            />
          ))}
        />
      </S.SalesBox>
    </>
  )
}

const Head = () => {
  return (
    <S.Container>
      <HeadText />
    </S.Container>
  )
}

export default Head
