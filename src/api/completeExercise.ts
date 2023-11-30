import { $api } from '.'

export const completeExercise = (
  user_exercise_id: string,
  done_repeats: number,
) =>
  $api.post('/exercises/complete', {
    user_exercise_id,
    done_repeats,
  })
