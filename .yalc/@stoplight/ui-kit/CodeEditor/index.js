"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cn = require("classnames");
const React = require("react");
const classes_1 = require("../classes");
require("prismjs/components/");
const react_simple_code_editor_1 = require("react-simple-code-editor");
const highlightCode_1 = require("./utils/highlightCode");
const CodeEditor = React.forwardRef(function Editor(props, ref) {
    const { autoFocus, language, onChange, value, className } = props, rest = tslib_1.__rest(props, ["autoFocus", "language", "onChange", "value", "className"]);
    const highlight = React.useCallback(() => highlightCode_1.highlightCode(value, language), [value, language]);
    return (React.createElement("div", Object.assign({ className: cn(classes_1.Classes.RUNNING_TEXT, classes_1.Classes.CODE_BLOCK, classes_1.Classes.CODE_EDITOR, className) }, rest),
        React.createElement(react_simple_code_editor_1.default, { autoFocus: autoFocus, ref: ref, value: value, onValueChange: onChange, highlight: highlight })));
});
exports.CodeEditor = CodeEditor;
//# sourceMappingURL=index.js.map