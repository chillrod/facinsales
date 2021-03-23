import axios from 'axios'

const apiCodeMailer = axios.create({
  baseURL: 'http://10.0.0.101:3334/v2'
})

export default apiCodeMailer
