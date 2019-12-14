import { rem } from 'polished'
import { scroller } from 'react-scroll'

export const pxToRem = (pxVal) => rem(pxVal, 18)

export const scrollIntoView = (name) => {
  scroller.scrollTo(name, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
    offset: -175,
  })
}

export const transformPath = (path, reverse = false) => {
  if (reverse) {
    switch (path) {
      case 'year1':
        return '1.ročník'
      case 'year2':
        return '2.ročník'
      case 'year3':
        return '3.ročník'
      case 'year4':
        return '4.ročník'
      case 'year5':
        return '5.ročník'
      default:
        return null
    }
  } else {
    switch (path) {
      case '1.ročník':
        return 'year1'
      case '2.ročník':
        return 'year2'
      case '3.ročník':
        return 'year3'
      case '4.ročník':
        return 'year4'
      case '5.ročník':
        return 'year5'
      default:
        return null
    }
  }
}

export const getCourseData = (data, id) => {
  let allCourses
  const courseId = id.split('-')[1]
  const studyType = transformPath(id.split('-')[0], true)
  data.some(({ type, courses }) => {
    allCourses = courses
    return type === studyType
  })
  return {
    allCourses,
    courseId,
  }
}
