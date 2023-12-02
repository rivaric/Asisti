export type Message = {
  sender: 'patient' | 'doctor',
  text: string
  time: Date,
}