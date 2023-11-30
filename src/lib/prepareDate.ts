export const prepareDate = (date: Date) =>
  date.toLocaleString('ru', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
