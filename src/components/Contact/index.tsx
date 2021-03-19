import { contactData } from '../../services/api'
import { Form } from '@unform/web'

import {
  BackgroundContainer,
  ListItemText,
  TitleBox,
  InfoTypography,
  FormGrid,
  FormGridItem,
  TextField,
  FormButtonContainer,
  FormButton,
  Container,
  ContactGrid,
  CTATypography
} from '../../styles/template/Contact/styles'
import LottieAnimation from 'components/Animation'
import typing from '../../../public/animation/typing.json'
const Content = () => {
  return (
    <ContactGrid>
      <ListItemText
        primary={
          <TitleBox>
            <CTATypography>{contactData.info.title}</CTATypography>
          </TitleBox>
        }
        secondary={
          <TitleBox>
            <InfoTypography>{contactData.info.paragraph}</InfoTypography>
          </TitleBox>
        }
      />

      <FormGrid>
        <LottieAnimation lotti={typing} width={100} height={120} />
        <FormGridItem>
          <Form>
            {contactData?.form?.map((form) => (
              <>
                <TextField name={form.value} label={form.title} key={form.id} />
              </>
            ))}
            <FormButtonContainer>
              <FormButton type="button">Enviar</FormButton>
            </FormButtonContainer>
          </Form>
        </FormGridItem>
      </FormGrid>
    </ContactGrid>
  )
}

const Contact = () => {
  return (
    <BackgroundContainer>
      <Container>
        <Content />
      </Container>
    </BackgroundContainer>
  )
}

export default Contact
