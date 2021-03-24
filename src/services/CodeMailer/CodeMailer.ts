import axios from 'axios'

const apiCodeMailer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CODE_MAILER_URL
})

export default apiCodeMailer
