import { create } from 'zustand'

interface useTrainStore {
  repeat: number
  exercises: {
    done: number
    require: number
  }
  setRepeat: (value: number) => void
  addRepeat: () => void
  setExercises: (done: number, require: number) => void
}

export const useTrainStore = create<useTrainStore>((set) => ({
  repeat: 0,
  exercises: {
    done: 0,
    require: 0,
  },
  setRepeat: (repeat) => set(() => ({ repeat })),
  addRepeat: () => set((prevState) => ({ repeat: prevState.repeat + 1 })),
  setExercises: (done, require) =>
    set(() => ({ exercises: { done, require } })),
}))
