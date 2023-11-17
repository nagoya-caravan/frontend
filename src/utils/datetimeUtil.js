export function dateFromStr(strDate) {
  const splitDate = strDate.split("-")
  return new Date(splitDate[0], splitDate[1], splitDate[2], splitDate[3], splitDate[4], splitDate[5])
}

export function strFromDate(date) {
  const year = date.getFullYear()
  const month = ('00' + (date.getMonth() + 1)).slice(-2)
  const day = ('00' + date.getDate()).slice(-2);
  const hour = ('00' + date.getHours()).slice(-2);
  const minute = ('00' + date.getMinutes()).slice(-2);
  const sec = ('00' + date.getSeconds()).slice(-2);
  return `${year}-${month}-${day}-${hour}-${minute}-${sec}`
}

export function datetimeFirst(year, month, date, hour = undefined, minute = undefined, second = undefined, ms = undefined) {
  if (hour == null) hour = 0
  if (minute == null) minute = 0
  if (second == null) second = 0
  if (ms == null) ms = 0
  return new Date(year, month, date, hour, minute, second, ms)
}

export function datetimeLast(year, month, date, hour = undefined, minute = undefined, second = undefined, ms = undefined) {
  if (hour == null) hour = 23
  if (minute == null) minute = 59
  if (second == null) second = 59
  if (ms == null) ms = 999
  return new Date(year, month, date, hour, minute, second, ms)
}