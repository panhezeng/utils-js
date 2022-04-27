declare const _default: {
    getItem(sKey: string): string | null;
    setItem(sKey: string, sValue: string, vEnd?: string | number | Date | undefined, sPath?: string | undefined, sDomain?: string | undefined, bSecure?: string | undefined): boolean;
    removeItem(sKey: string, sPath?: string | undefined, sDomain?: string | undefined): boolean;
    hasItem(sKey: string): boolean;
    keys(): string[];
};
export default _default;
