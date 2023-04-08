import request from '../utils/request'

export function getAllQuiz () {
  return request({
    url: `/quiz/all`,
    method: 'get',
  })
}