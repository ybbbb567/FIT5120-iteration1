import axios from 'axios'
import { message } from 'antd'
// axios
const service = axios.create({
  baseURL: 'http://localhost:8080/', // api base_url
  // baseURL: 'https://smartrecyclebackend.azurewebsites.net/', // api base_url
  timeout: 600000 // Request timeout
})
// request interceptor
service.interceptors.request.use(config => {
  config.headers['x-access-token'] = "123" //default token
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// response interceptor
service.interceptors.response.use(
  response => {
    if (response.data.code !== '200') {
      message.error(response.data.message);
    }
    return response.data
  },
  error => {
    // Do something with response error
    if (error.response.status === 678) {
      return Promise.reject(error);
    }
    return Promise.reject(error)
  }
)

export default service
