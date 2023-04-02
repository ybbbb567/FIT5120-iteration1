import request from '../utils/request'

export function checkLink (urlString) {
  return request({
    url: `/classification/predict`,
    data: { url: urlString },
    method: 'post',
  })
}