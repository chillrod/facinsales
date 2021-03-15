import { contactData } from '../../services/api'
import { Form } from '@unform/web'
import {
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
        <FormGridItem>
          <Form>
            {contactData?.form?.map((form) => (
              <>
                <TextField name={form.value} label={form.title} key={form.id} />
              </>
            ))}
          </Form>
        </FormGridItem>
        <FormButtonContainer>
          <FormButton>Enviar</FormButton>
        </FormButtonContainer>
      </FormGrid>
    </ContactGrid>
  )
}

const Contact = () => {
  return (
    <Container>
      <Content />
    </Container>
  )
}

export default Contact
