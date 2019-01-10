const moment = require('moment');

moment.calendarFormat = function (myMoment, now) {
  let diff = myMoment.diff(now, 'days', true)
  if (myMoment.year() < now.year()) {
    return 'sameElse'
  }
  if (diff < -now.weekday()) {
    return 'lastMonth'
  }
  if (diff < -1) {
    return 'lastWeek'
  }
  if (diff < 0) {
    return 'lastDay'
  }
  if (diff < 1) {
    return 'sameDay'
  }
  return 'sameElse'
}

moment.defineLocale('zh-cn-custom', {
  parentLocale: 'zh-cn',
  weekdaysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  calendar: {
    lastDay: '[昨天]',
    sameDay: 'A h:mm',
    lastWeek: 'ddd',
    lastMonth: 'l',
    sameElse: 'L'
  },
  meridiem: function (hour, minute, isLowercase) {
    if (hour < 9) {
      return '早上'
    } else if (hour < 11 && minute < 30) {
      return '上午'
    } else if (hour < 13 && minute < 30) {
      return '中午'
    } else if (hour < 18) {
      return '下午'
    } else {
      return '晚上'
    }
  }
})

moment.defineLocale('en-custom', {
  parentLocale: 'en',
  weekdaysShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
  calendar: {
    lastDay: '[Yesterday]',
    sameDay: 'A h:mm',
    lastWeek: 'ddd',
    lastMonth: 'l',
    sameElse: 'L'
  },
  meridiem: function (hour, minute, isLowercase) {
    if (hour < 9) {
      return 'morning'
    } else if (hour < 11 && minute < 30) {
      return 'morning'
    } else if (hour < 13 && minute < 30) {
      return 'noon'
    } else if (hour < 18) {
      return 'afternoon'
    } else {
      return 'night'
    }
  }
})

function i18n (lang) {
  moment.locale(`${lang.toLowerCase()}-custom`)
}

Object.defineProperty(moment, 'i18n', {
  get: function () {
    return i18n
  }
})

module.exports = moment
