import moment from 'moment'

// 日期格式化
export const dateFilter0 = (val) => val ? moment(val).format('YYYY-MM-DD') : '无'
export const dateFilter1 = (val) => val ? moment(val).format('YYYY年MM月DD日') : '无'
export const dateFilter2 = (val) => val ? moment(val).format('YYYY.MM.DD') : '无'
export const dateFilter3 = (val) => val ? moment(val).format('YYYY/MM/DD') : '无'
export const dateFilter4 = (val, format = 'MM-DD') => val ? moment(val).format(format) : '无'

// 时间格式化
export const dateTimeFilter0 = (val) => val ? moment(val).format('YYYY-MM-DD HH:mm') : '无'
export const dateTimeFilter1 = (val) => val ? moment(val).format('YYYY年MM月DD日 HH:mm') : '无'
export const dateTimeFilter2 = (val) => val ? moment(val).format('YYYY-MM-DD HH:mm:ss') : '无'
export const hourTimeFilter = (val) => val ? moment(val).format('HH:mm') : '无'

// 时间间隔天数 date 日期时间   val相隔天数
export const intervalDayFilter = (date , val) =>  moment(date).add(val,'days').format('YYYY-MM-DD HH:mm:ss')

// 时间间隔格式化
export const diffFilter = (val, type = 'days') => {
  const diff = val ? moment(val).diff(Date.now(), type) : 0
  return diff > 0 ? diff : 0
}