const months = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
]

export const formatDate = (date: string) => {
  // 2024-10-20
  const split = date.split("-")
  const monthIdx = Number(split[1]) - 1
  const month = months[monthIdx]

  return `${split[2]} ${month} ${split[0]}`
}
