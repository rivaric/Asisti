import axios from 'axios'

export const $api = axios.create({
  baseURL: '/api/v1',
  withCredentials: true,
  responseType: 'json',
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`
  return config
})
