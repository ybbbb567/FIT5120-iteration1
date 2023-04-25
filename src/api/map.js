import request from '../utils/request'

export function getNews () {
  return request({
    url: `/map/news`,
    method: 'get',
  })
}