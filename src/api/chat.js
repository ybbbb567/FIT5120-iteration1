import request from '../utils/request'

export function chat (chatLog) {
  return request({
    url: '/simulate/chat',
    data: JSON.stringify(chatLog),
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  })
}