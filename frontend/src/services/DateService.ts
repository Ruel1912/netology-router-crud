export const formatDate = (date: number) => {
  const d = new Date(date)
  return `${leadZero(d.getHours())}:${leadZero(d.getMinutes())}`
}

const leadZero = (num: number) => {
  return num < 10 ? `0${num}` : num
}
