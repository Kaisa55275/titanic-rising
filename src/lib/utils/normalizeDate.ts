import dayjs from 'dayjs'

export const normalizeMetaDate = (dateNum: number) => {
  const stringifiedNum = String(dateNum)
  if (stringifiedNum.length !== 8) throw new Error('invalid date num')
  const formatted = dayjs(stringifiedNum).format('YYYY-MM-DD')
  return formatted
}
