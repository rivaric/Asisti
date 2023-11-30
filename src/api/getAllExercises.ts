import { $api } from '.'

export const getAllExercises = () =>
  $api.get('/users/me')
