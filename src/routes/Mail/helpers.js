export const transformTimestamp = (timestamp) => {
  const timeArr = timestamp.split(' ')
  return `${timeArr[0]} ${timeArr[1]} ${timeArr[2]}`
}

export const transformTimestampShort = (timestamp) => {
  const timeArr = timestamp.split(' ')
  return `${timeArr[1]} ${timeArr[2]}`
}
