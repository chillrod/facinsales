import { mainData, productHead } from '../../services/api'
import {
  Container,
  SectionGrid,
  SectionTransitionGrid,
  SectionGridItem,
  Icon,
  ListItemText,
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
        <ListItemText primary={productHead.title} />
      </SectionTransitionGrid>
      <SectionGrid>
        {mainData?.content?.map((data, index) => (
          <>
            <SectionGridItem key={data.id}>
              <SectionGridItemMotion>
                <Icon>{data.icon}</Icon>
                <ListItemText
                  primary={data.title}
                  secondary={
                    <Details>
                      <Typography>{data.paragraph}</Typography>
                    </Details>
                  }
                />
              </SectionGridItemMotion>
            </SectionGridItem>
            {index % 8 === 3 && (
              <CtaButtonGrid>
                <CtaButtonComponent />
              </CtaButtonGrid>
            )}
          </>
        ))}
      </SectionGrid>
    </>
  )
}

const Section = () => {
  return (
    <Container>
      <Content />
    </Container>
  )
}

export default Section
