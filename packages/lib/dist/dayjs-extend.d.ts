import type dayjsType from 'dayjs';
import type { PluginFunc } from 'dayjs';
import 'dayjs/plugin/updateLocale';
import 'dayjs/plugin/duration';
type LocaleParameters = Parameters<typeof dayjsType['locale']>;
export default function dayjsExtend(dayjs: typeof dayjsType, { updateLocale, localizedFormat, weekday, relativeTime, duration, calendar, preset, localeObject, }?: {
    updateLocale?: PluginFunc<any>;
    localizedFormat?: PluginFunc<any>;
    weekday?: PluginFunc<any>;
    relativeTime?: PluginFunc<any>;
    duration?: PluginFunc<any>;
    calendar?: PluginFunc<any>;
    preset?: LocaleParameters[0];
    localeObject?: LocaleParameters[0];
}): {
    durationFormatHMS: (seconds: number, { hAlwaysShow, hZeroPadWidth, mZeroPadWidth, sZeroPadWidth, mNoZeroPad, }?: {
        hAlwaysShow?: boolean | undefined;
        hZeroPadWidth?: number | undefined;
        mZeroPadWidth?: number | undefined;
        sZeroPadWidth?: number | undefined;
        mNoZeroPad?: boolean | undefined;
    }) => string;
    i18n: (preset: LocaleParameters[0], localeObject: LocaleParameters[0]) => void;
    formatIos: (format: string) => string;
    getDate: (val: string) => Date;
    getDateByFormat: (format: string) => Date;
};
export {};
