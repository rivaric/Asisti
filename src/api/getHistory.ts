import { $api } from './axios'

export const getHistory = (access: string) =>
  $api.get('/exercises/history', {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  })
