import { useState, useCallback, useRef } from 'react'
import MailTemplate from '../../services/Mail/MailTemplate'
import apiCodeMailer from '../../services/CodeMailer/CodeMailer'
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
  phone: string
  email: string
  company: string
  role: string
  observation: string
}

const Content = () => {
  const formRef = useRef<FormHandles>(null)
  const [mailBtn, setMailBtn] = useState('Enviar')
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(async (data: DataProps) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome não deve ser vazio'),
        email: Yup.string()
          .email('Deve ser um email válido')
          .required('Email não deve ser vazio'),
        phone: Yup.string().required('Telefone não deve ser vazio')
      })

      await schema.validate(data, {
        abortEarly: false
      })
      await apiCodeMailer({
        url: `${apiCodeMailer.defaults.baseURL}/email`,
        method: 'post',
        data: {
          from: process.env.NEXT_PUBLIC_CODE_MAILER_FROM,
          to: process.env.NEXT_PUBLIC_CODE_MAILER_TO,
          subject: 'Prospect do FacIN Sales',
          html: MailTemplate({
            name: data.name,
            email: data.email,
            phone: data.phone,
            company: data.company,
            role: data.role,
            observation: data.observation
          })
        }
      }).then((res) => {
        res.data

        setMailBtn('Enviado')
      })
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
              <TextField name="phone" label="Telefone" />
              <TextField name="company" label="Empresa (opcional) " />
              <TextField name="role" label="Cargo (opcional) " />
              <TextField
                name="observation"
                label="Observação"
                multiline
                rows={4}
              />
            </>
            <FormButtonContainer>
              <FormButton type="submit">{mailBtn}</FormButton>
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
