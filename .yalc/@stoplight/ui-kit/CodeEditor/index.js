"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cn = require("classnames");
const React = require("react");
const react_simple_code_editor_1 = require("react-simple-code-editor");
const highlightCode_1 = require("./utils/highlightCode");
const CodeEditor = React.forwardRef(function Editor(props, ref) {
    const { autoFocus, language, onChange, value, placeholder, className } = props, rest = tslib_1.__rest(props, ["autoFocus", "language", "onChange", "value", "placeholder", "className"]);
    const highlight = React.useCallback(code => (language ? highlightCode_1.highlightCode(code, language) : code), [language]);
    return (React.createElement("div", Object.assign({ className: cn('bp3-code-editor', className) }, rest),
        !value && placeholder && React.createElement("span", { className: "absolute text-disabled" }, placeholder),
        React.createElement(react_simple_code_editor_1.default, { autoFocus: autoFocus, ref: ref, value: value, onValueChange: onChange, highlight: highlight })));
});
exports.CodeEditor = CodeEditor;
//# sourceMappingURL=index.js.map