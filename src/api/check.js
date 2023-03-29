import request from '../utils/request'

export function checkLink (urlString) {
  return request({
    url: `/check/` + urlString,
    method: 'get',
  })
}