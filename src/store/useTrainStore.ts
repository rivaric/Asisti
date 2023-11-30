import { create } from 'zustand'

interface useTrainStore {
  repeat: {
    done: number
    require: number
  }
  exercises: {
    done: number
    require: number
  }
  setRepeat: (done: number, require: number) => void
  setExercises: (done: number, require: number) => void
}

export const useTrainStore = create<useTrainStore>((set) => ({
  repeat: {
    done: 0,
    require: 0,
  },
  exercises: {
    done: 0,
    require: 0,
  },
  setRepeat: (done, require) => set(() => ({ repeat: { done, require } })),
  setExercises: (done, require) =>
    set(() => ({ exercises: { done, require } })),
}))
