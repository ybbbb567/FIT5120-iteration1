import request from '../utils/request'

export function checkLink (url) {
  return request({
    url: '/classification/predict',
    data: { link: url },
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  })
}

export function vote (website) {
  return request({
    url: '/classification/vote',
    data: website,
    method: 'post',
  })
}