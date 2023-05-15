import request from '../utils/request'

export function getCourse () {
  return request({
    url: `/info/course`,
    method: 'get',
  })
}

export function getFraudData () {
  return request({
    url: `/info/fraud`,
    method: 'get',
  })
}

export function getReportHotline () {
  return request({
    url: `/info/report`,
    method: 'get',
  })
}
