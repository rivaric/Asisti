import { AxiosResponse } from 'axios'
import { $api } from '.'

interface AuthResponse {
  access_token: string
  refresh_token: string
}

export const login = (
  phone: string,
  password: string
): Promise<AxiosResponse<AuthResponse>> => {
  return $api.post<AuthResponse>('/users/login', {
    phone,
    password,
  })
}
