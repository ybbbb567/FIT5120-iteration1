import request from '../utils/request'

export function checkLink (url) {
  return request({
    url: `/classification/predict`,
    data: { urlString: url },
    method: 'post',
  })
}