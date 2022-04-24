import xssType from 'xss';
export default function (xss: typeof xssType): {
    cleanHtml: (source: string) => string;
};
