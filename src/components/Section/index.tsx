import { Fragment } from 'react'
import { mainData } from '../../services/api'
import {
  BackgroundContainer,
  MediaQuery,
  Container,
  SectionGrid,
  SectionTransitionGrid,
  Icon,
  ListItemText,
  TypographyHeader,
  TypographyHead,
  Details,
  Typography,
  SectionGridItemMotion,
  CtaButtonGrid,
  CtaTypography,
  CtaLinkButton
} from '../../styles/template/Section/styles'

const CtaButtonComponent = () => {
  return (
    <>
      <CtaTypography>{mainData.title}</CtaTypography>
      <CtaLinkButton>{mainData.buttonText}</CtaLinkButton>
    </>
  )
}

const Content = () => {
  return (
    <>
      <SectionTransitionGrid>
        <TypographyHeader>{mainData.headText}</TypographyHeader>
      </SectionTransitionGrid>
      <MediaQuery>
        <SectionGrid>
          {mainData?.content?.map((data, index) => (
            <Fragment key={data.id}>
              <SectionGridItemMotion>
                <Icon>{data.icon}</Icon>
                <ListItemText
                  primary={<TypographyHead>{data.title}</TypographyHead>}
                  secondary={
                    <Details>
                      <Typography>{data.paragraph}</Typography>
                    </Details>
                  }
                />
              </SectionGridItemMotion>
              {index % 8 === 3 && (
                <CtaButtonGrid>
                  <CtaButtonComponent />
                </CtaButtonGrid>
              )}
            </Fragment>
          ))}
        </SectionGrid>
      </MediaQuery>
    </>
  )
}

const Section = () => {
  return (
    <BackgroundContainer>
      <Container>
        <Content />
      </Container>
    </BackgroundContainer>
  )
}

export default Section
