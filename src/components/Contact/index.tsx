import { contactData } from '../../services/api'
import { Form } from '@unform/web'
import * as S from '../../styles/template/Contact/styles'

const Content = () => {
  return (
    <>
      <S.ListItemText
        primary={<S.TitleBox>{contactData.info.title}</S.TitleBox>}
        secondary={
          <S.TitleBox>
            <S.InfoTypography>
              Entre em contato agora com a nossa equipe de vendas ou preencha o
              formulário e entraremos em contato com você
            </S.InfoTypography>
          </S.TitleBox>
        }
      />

      <S.FormGrid>
        <S.FormGridItem>
          <S.FormBox>
            {contactData?.form?.map((form) => (
              <>
                <S.TextField
                  name={form.value}
                  label={form.title}
                  key={form.id}
                />
              </>
            ))}
          </S.FormBox>
        </S.FormGridItem>
        <S.FormButtonContainer>
          <S.FormButton>Enviar</S.FormButton>
        </S.FormButtonContainer>
      </S.FormGrid>
    </>
  )
}

const Contact = () => {
  return (
    <S.Container>
      <Content />
    </S.Container>
  )
}

export default Contact
