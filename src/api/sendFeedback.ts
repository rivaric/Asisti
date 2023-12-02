import { $api } from './axios'

export const sendFeedback = (text: string) =>
  $api.post('/users/add_feedback', {
    text,
  })
