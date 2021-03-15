import { mainData } from '../../services/api'
import * as S from '../../styles/template/Main/styles'

const CtaButton = () => {
  return (
    <>
      <S.CtaTypography>{mainData.title}</S.CtaTypography>
      <S.CtaLinkButton>{mainData.buttonText}</S.CtaLinkButton>
    </>
  )
}

const Content = () => {
  return (
    <S.ContentGrid>
      {mainData?.content?.map((data, index) => (
        <>
          <S.ContentGridItem key={data.id}>
            <S.ContentMotion color={index % 2 === 0 ? 'even' : 'odd'}>
              <S.Icon>{data.icon}</S.Icon>
              <S.ListItemText
                primary={data.title}
                secondary={
                  <S.Details>
                    <S.Typography>{data.paragraph}</S.Typography>
                  </S.Details>
                }
              />
            </S.ContentMotion>
          </S.ContentGridItem>
          {index % 8 === 3 && (
            <S.CtaButtonGrid>
              <CtaButton />
            </S.CtaButtonGrid>
          )}
        </>
      ))}
    </S.ContentGrid>
  )
}

const Main = () => {
  return (
    <S.Container>
      <S.ContainerBackground />
      <Content />
    </S.Container>
  )
}

export default Main
