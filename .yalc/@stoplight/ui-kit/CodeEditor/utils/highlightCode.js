"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prismjs_1 = require("prismjs");
exports.highlightCode = (code, language) => {
    const langDef = prismjs_1.languages[language];
    return langDef ? prismjs_1.highlight(code, langDef, '') : code;
};
//# sourceMappingURL=highlightCode.js.map