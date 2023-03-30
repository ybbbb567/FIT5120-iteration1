import request from '../utils/request'

export function addFeedback (feedback) {
  return request({
    url: `/feedback/a`,
    method: 'post',
    data: feedback
  })
}