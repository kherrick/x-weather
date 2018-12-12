import { dateTime, unixEpochToDate } from '../../../src/utilities'

const epochYear = 1970
const epochMonth = 0
const epochDay = 1
const epochHour = 0
const epochMinute = 0
const epochSecond = 0
const date = new Date(
  epochYear,
  epochMonth,
  epochDay,
  epochHour,
  epochMinute,
  epochSecond
)

test('year should be formatted', () => {
  const newDateTime = dateTime(date)
  const formattedYear = newDateTime.Y('-').getResults()

  expect(formattedYear).toBe('1970-')
})

test('month should be formatted', () => {
  const newDateTime = dateTime(date)
  const formattedMonth = newDateTime.m('-').getResults()

  expect(formattedMonth).toBe('01-')
})

test('day should be formatted', () => {
  const newDateTime = dateTime(date)
  const formattedDay = newDateTime.d('_').getResults()

  expect(formattedDay).toBe('01_')
})

test('hour should be formatted', () => {
  const newDateTime = dateTime(date)
  const formattedHour = newDateTime.H('-').getResults()

  expect(formattedHour).toBe('00-')
})

test('minute should be formatted', () => {
  const newDateTime = dateTime(date)
  const formattedMinute = newDateTime.M('-').getResults()

  expect(formattedMinute).toBe('00-')
})

test('second should be formatted', () => {
  const newDateTime = dateTime(date)
  const formattedSecond = newDateTime.S('-').getResults()

  expect(formattedSecond).toBe('00-')
})

test('date string should be formatted', () => {
  const newDateTime = dateTime(date)
  const formattedDate = newDateTime.Y('-').m('-').d('-').H('.').M('.').S().getResults()

  expect(formattedDate).toBe('1970-01-01-00.00.00')
})

test('unixEpochToDate returns proper date', () => {
  const convertedDate = unixEpochToDate(1000)
  const expectedDate = new Date('1970-01-01T00:16:40.000Z')

  expect(convertedDate).toEqual(expectedDate)
})
