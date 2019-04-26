export declare const toBase: (name: string, ext: string) => string;
export declare const parseFilename: (filename: string) => {
    ext: string;
    name: string;
};
export declare const validateLength: (base: string) => string | null;
export declare const validateUniqueness: (filenames: string[], filename: string) => string | null;
