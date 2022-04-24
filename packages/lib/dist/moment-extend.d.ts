import MomentType from 'moment';
export default function (moment: typeof MomentType): {
    durationFormatHMS: (seconds: number, { hAlwaysShow, hZeroPadWidth, mZeroPadWidth, sZeroPadWidth, mNoZeroPad, }?: {
        hAlwaysShow?: boolean | undefined;
        hZeroPadWidth?: number | undefined;
        mZeroPadWidth?: number | undefined;
        sZeroPadWidth?: number | undefined;
        mNoZeroPad?: boolean | undefined;
    }) => string;
    i18n: (lang: string) => void;
};
