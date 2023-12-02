import { create } from 'zustand'
import { Message } from '../types'

interface useMessageStoreState {
  messages: Message[]
  setMessage: (value: Message) => void
}

export const useMessagesStore = create<useMessageStoreState>((set) => ({
  messages: [
    {
      sender: 'doctor',
      text: 'Добрый день, чем могу вам помочь?',
      time: new Date(),
    },
  ],

  setMessage: (message: Message) =>
    set((prevState) => ({
      messages: [...prevState.messages, message],
    })),
}))
