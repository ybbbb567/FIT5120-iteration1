import axios from 'axios'
import { message } from 'antd'
// 创建axios实例
const service = axios.create({
  // baseURL: 'http://localhost:8080/', // api的base_url
  baseURL: 'https://smartrecyclebackend.azurewebsites.net/', // api的base_url
  timeout: 600000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
  //获取登录成功后store中的token
  config.headers['x-access-token'] = "123"// 让每个请求携带自定义token 请根据实际情况自行修改
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// response拦截器
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
