import { create } from 'zustand'

interface useTrainStoreState {
  setRecommendation: (value: string) => void
  exercise: {
    reccomendation: string
    count: number
    comment: string
  }
  setCount: (value: number) => void
  setComment: (value: string) => void
}

export const useTrainStore = create<useTrainStoreState>((set) => ({
  exercise: {
    reccomendation: 'Поднесите руку ко рту',
    count: 0,
    comment: '',
  },
  setRecommendation: (reccomendation) =>
    set((prevState) => ({
      exercise: { ...prevState.exercise, reccomendation },
    })),
  setCount: (count) =>
    set((prevState) => ({ exercise: { ...prevState.exercise, count } })),
  setComment: (comment) =>
    set((prevState) => ({ exercise: { ...prevState.exercise, comment } })),
}))
