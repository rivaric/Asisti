import { $api } from '.'

export const getExercises = () => $api.get('/users/me')
