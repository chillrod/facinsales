import { useCallback, useRef } from 'react'
import { sendMail } from '../../hooks/CodeMailer'
import { contactData } from '../../services/api'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import TextField from '../Input/'
import {
  BackgroundContainer,
  ListItemText,
  TitleBox,
  InfoTypography,
  FormGrid,
  FormGridItem,
  FormButtonContainer,
  FormButton,
  Container,
  ContactGrid,
  CTATypography
} from '../../styles/template/Contact/styles'
import getContactErrors from '../../utils/getContactErrors'

interface DataProps {
  name: string
  company: string
  email: string
  observation: string
}

const Content = () => {
  const formRef = useRef<FormHandles>(null)
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(async (data: DataProps) => {
    console.log(data)
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome não deve ser vazio'),
        email: Yup.string().required('Email não deve ser vazio')
      })

      await schema.validate(data, {
        abortEarly: false
      })
      const { name, email, company, observation } = data
      await sendMail({ name, email, company, observation })
    } catch (err) {
      const errors = getContactErrors(err)
      formRef.current?.setErrors(errors)
    }
  }, [])

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
          <Form ref={formRef} onSubmit={handleSubmit}>
            <>
              <TextField name="name" label="Nome" />
              <TextField name="email" label="E-Mail" />
              <TextField name="company" label="Empresa (opcional) " />
              <TextField
                name="observation"
                label="Observação"
                multiline
                rows={4}
              />
            </>
            <FormButtonContainer>
              <FormButton type="submit">Enviar</FormButton>
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
