import xssType, { IFilterXSSOptions } from 'xss';
export default function xssExtend(xss: typeof xssType): {
    cleanHtml: (html: string, options?: IFilterXSSOptions) => string;
};
