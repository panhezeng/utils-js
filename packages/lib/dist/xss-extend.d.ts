import xssType, { IFilterXSSOptions } from 'xss';
export default function (xss: typeof xssType): {
    cleanHtml: (html: string, options?: IFilterXSSOptions) => string;
};
