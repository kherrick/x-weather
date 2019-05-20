import { dateTime, to12HourTime, unixEpochToDate } from '../../../src/utilities'

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

test('to12HourTime returns 12:00:00 AM when given no argument', () => {
  const time = to12HourTime()

  expect(time).toEqual('12:00:00 AM')
})

test('to12HourTime returns expected values from given fixture', () => {
  const timeFixture = [
    null,
    undefined,
    '',
    '00:00:00',
    '00:00:01',
    '03:00:00',
    '06:00:00',
    '09:00:00',
    '11:59:59',
    '12:00:00',
    '12:00:01',
    '15:00:00',
    '18:00:00',
    '21:00:00',
    '23:59:59',
    '24:00:00'
  ]

  const expectedValues = [
    '12:00:00 AM',
    '12:00:00 AM',
    '12:00:00 AM',
    '12:00:00 AM',
    '12:00:01 AM',
    '3:00:00 AM',
    '6:00:00 AM',
    '9:00:00 AM',
    '11:59:59 AM',
    '12:00:00 PM',
    '12:00:01 PM',
    '3:00:00 PM',
    '6:00:00 PM',
    '9:00:00 PM',
    '11:59:59 PM',
    '12:00:00 AM'
  ]

  timeFixture.forEach((time, index) => {
    expect(to12HourTime(time)).toEqual(expectedValues[index])
  })
})
