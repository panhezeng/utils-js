import type dayjsType from 'dayjs';
import type { PluginFunc } from 'dayjs';
import 'dayjs/plugin/updateLocale';
import 'dayjs/plugin/duration';

type LocaleParameters = Parameters<typeof dayjsType['locale']>;
export default function dayjsExtend(
  dayjs: typeof dayjsType,
  {
    updateLocale,
    localizedFormat,
    weekday,
    relativeTime,
    duration,
    calendar,
    preset,
    localeObject,
  }: {
    updateLocale?: PluginFunc<any>;
    localizedFormat?: PluginFunc<any>;
    weekday?: PluginFunc<any>;
    relativeTime?: PluginFunc<any>;
    duration?: PluginFunc<any>;
    calendar?: PluginFunc<any>;
    preset?: LocaleParameters[0];
    localeObject?: LocaleParameters[0];
  } = {}
) {
  async function i18n(
    preset: LocaleParameters[0],
    localeObject: LocaleParameters[0]
  ) {
    dayjs.locale(localeObject);
    if (preset === 'zh-cn') {
      dayjs.updateLocale('zh-cn', {
        weekdaysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        meridiem(hour: any, minute: any) {
          if (hour < 9) {
            return '早上';
          } else if (hour < 11) {
            return '上午';
          } else if (hour < 13) {
            return '中午';
          } else if (hour < 18) {
            return '下午';
          } else {
            return '晚上';
          }
        },
        calendar: {
          lastDay: '[昨天]',
          sameDay: 'A h:mm',
          lastWeek: 'ddd',
          lastMonth: 'l',
          sameElse: 'L',
        },
      });
    } else if (preset === 'en') {
      dayjs.updateLocale('en', {
        weekdaysShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
        meridiem(hour: any, minute: any) {
          if (hour < 9) {
            return 'morning';
          } else if (hour < 11) {
            return 'morning';
          } else if (hour < 13) {
            return 'noon';
          } else if (hour < 18) {
            return 'afternoon';
          } else {
            return 'night';
          }
        },
        calendar: {
          lastDay: '[Yesterday]',
          sameDay: 'A h:mm',
          lastWeek: 'ddd',
          lastMonth: 'l',
          sameElse: 'L',
        },
      });
    }
  }

  function durationFormatHMS(
    seconds: number,
    {
      hAlwaysShow = false,
      hZeroPadWidth = 1,
      mZeroPadWidth = 1,
      sZeroPadWidth = 2,
      mNoZeroPad = false,
    } = {}
  ) {
    const milliseconds = seconds * 1000;

    let h = '';

    const hours = Math.floor(dayjs.duration(milliseconds).asHours());

    if (hAlwaysShow || hours) {
      h = `${String(hours).padStart(hZeroPadWidth, '0')}:`;
      if (!mNoZeroPad) {
        mZeroPadWidth = 2;
      }
    }

    return `${
      h +
      String(dayjs.duration(milliseconds).minutes()).padStart(
        mZeroPadWidth,
        '0'
      )
    }:${String(dayjs.duration(milliseconds).seconds()).padStart(
      sZeroPadWidth,
      '0'
    )}`;
  }

  updateLocale && dayjs.extend(updateLocale);
  localizedFormat && dayjs.extend(localizedFormat);
  weekday && dayjs.extend(weekday);
  relativeTime && dayjs.extend(relativeTime);
  duration && dayjs.extend(duration);
  calendar && dayjs.extend(calendar);
  preset && localeObject && i18n(preset, localeObject);

  function formatIos(format: string) {
    return format.replace(/-|\./g, '/');
  }

  function getDate(val: string) {
    return new Date(formatIos(val));
  }

  function getDateByFormat(format: string) {
    return new Date(dayjs().format(formatIos(format)));
  }

  return { durationFormatHMS, i18n, formatIos, getDate, getDateByFormat };
}
