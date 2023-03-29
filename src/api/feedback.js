import request from '../utils/request'

export function addFeedback (feedback) {
  return request({
    url: `/feedback/`,
    param: feedback,
    method: 'post',
  })
}