import { $api } from '.'

export const login = (phone: string, password: string) =>
  $api.post('/users/login', {
    phone,
    password,
  })
