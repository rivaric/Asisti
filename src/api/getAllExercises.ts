import { $api } from '.'

export const getAllExercises = (access: string) =>
  $api.get('/users/me', {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  })
