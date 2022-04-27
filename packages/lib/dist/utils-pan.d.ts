import checkUpload from './check-upload';
import textOverflow from './text-overflow';
import delArrayItemByValue from './del-array-item-by-value';
import getArrayItemByValue from './get-array-item-by-value';
import getObjectItemByPath from './get-object-item-by-path';
import xssExtend from './xss-extend';
import momentExtend from './moment-extend';
declare const _default: {
    checkUpload: typeof checkUpload;
    textOverflow: typeof textOverflow;
    delArrayItemByValue: typeof delArrayItemByValue;
    getArrayItemByValue: typeof getArrayItemByValue;
    getObjectItemByPath: typeof getObjectItemByPath;
    cookies: {
        getItem(sKey: string): string | null;
        setItem(sKey: string, sValue: string, vEnd?: string | number | Date | undefined, sPath?: string | undefined, sDomain?: string | undefined, bSecure?: string | undefined): boolean;
        removeItem(sKey: string, sPath?: string | undefined, sDomain?: string | undefined): boolean;
        hasItem(sKey: string): boolean;
        keys(): string[];
    };
    storage: {
        getItemByJSONParse(item: string, api?: keyof Window): any;
    };
    xssExtend: typeof xssExtend;
    momentExtend: typeof momentExtend;
};
export default _default;
