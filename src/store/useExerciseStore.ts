import { create } from 'zustand'

interface useExerciseStoreState {
  setRecommendation: (value: string) => void
  exercise: {
    recommendation: string
    comment: string
  }
  setComment: (value: string) => void
}

export const useExerciseStore = create<useExerciseStoreState>((set) => ({
  exercise: {
    recommendation: 'Поднесите руку ко рту',
    comment: '',
  },
  setRecommendation: (recommendation) =>
    set((prevState) => ({
      exercise: { ...prevState.exercise, recommendation },
    })),
  setComment: (comment) =>
    set((prevState) => ({ exercise: { ...prevState.exercise, comment } })),
}))
