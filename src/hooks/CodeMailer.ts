// import apiCodeMailer from '../services/CodeMailer/CodeMailer'

// export interface SendMailProps {
//   name: string
//   email: string
//   company: string
//   observation: string
// }

// export const sendMail = async ({
//   name,
//   email,
//   company,
//   observation
// }): SendMailProps => {
//   console.log({ name, email, company, observation })
//   // to = process.env.CODE_MAILER_TO
//   // subject = '',
//   // html = ''
//   try {
//     const { data } = await apiCodeMailer.post('email', {
//       params: { name, email, company, observation }
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }
