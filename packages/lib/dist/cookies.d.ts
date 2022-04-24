declare const _default: {
    getItem(sKey: string): string | null;
    setItem(sKey: string, sValue: string, vEnd: number | string | Date, sPath: string, sDomain: string, bSecure: string): boolean;
    removeItem(sKey: string, sPath: string, sDomain: string): boolean;
    hasItem(sKey: string): boolean;
    keys(): string[];
};
export default _default;
