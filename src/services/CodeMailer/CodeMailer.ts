import axios from 'axios'

const apiCodeMailer = axios.create({
  baseURL: 'http://codemailer.facilecloud.com.br/v2'
})

export default apiCodeMailer
