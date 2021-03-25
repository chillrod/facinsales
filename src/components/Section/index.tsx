import { Fragment, useEffect } from 'react'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
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
import { useAnimation } from 'framer-motion'

const Content = () => {
  const headTextControl = useAnimation()
  const [headTextRef, headTextInView] = useInView()

  useEffect(() => {
    if (headTextInView) {
      headTextControl.start('visible')
    }
  }, [headTextControl, headTextInView])

  return (
    <>
      <SectionTransitionGrid
        ref={headTextRef}
        animate={headTextControl}
        initial="hidden"
        transition={{ duration: 0.4 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -10 }
        }}
      >
        <TypographyHeader>{mainData.headText}</TypographyHeader>
      </SectionTransitionGrid>
      <MediaQuery>
        <SectionGrid>
          {mainData?.content?.map((data, index) => {
            if (index < 6)
              return (
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
                      <CtaTypography>{mainData.title}</CtaTypography>
                      <Link href="about/Contato">
                        <CtaLinkButton>{mainData.buttonText}</CtaLinkButton>
                      </Link>
                    </CtaButtonGrid>
                  )}
                </Fragment>
              )
          })}
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
