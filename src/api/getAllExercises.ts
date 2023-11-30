import { $api } from '.'
import { Exercise } from '../types'

export const getAllExercises = (access: string) =>
  $api.get<{
    exercises: Exercise[]
    id: string
    mail: string
    name: string
    phone: string
    role: string
    surname: string
  }>('/users/me', {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  })
