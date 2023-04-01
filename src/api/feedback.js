import request from '../utils/request'

export function addFeedback (feedback) {
  return request({
    url: `/feedback/a`,
    data: feedback,
    method: 'post',
  })
}

export function getFeedback (){
  return request({
    url: `/feedback/all`,
    method: 'get',
  })
}