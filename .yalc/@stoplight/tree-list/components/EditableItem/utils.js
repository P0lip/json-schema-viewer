"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
exports.toBase = (name, ext) => `${name}${ext}`;
exports.parseFilename = (filename) => {
    const ext = path_1.extname(filename);
    return {
        ext,
        name: path_1.basename(filename, ext),
    };
};
exports.validateLength = (base) => {
    if (base.length < 1) {
        return 'Base must contain at least one character';
    }
    return null;
};
exports.validateUniqueness = (filenames, filename) => {
    if (filenames.includes(filename)) {
        return 'File already exists';
    }
    return null;
};
//# sourceMappingURL=utils.js.map