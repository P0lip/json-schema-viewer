"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cn = require("classnames");
const React = require("react");
const reader_1 = require("@stoplight/markdown/reader");
const ui_kit_1 = require("@stoplight/ui-kit");
const renderTree_1 = require("../utils/renderTree");
const MarkdownViewer = (_a) => {
    var { markdown, className } = _a, props = tslib_1.__rest(_a, ["markdown", "className"]);
    const tree = React.useMemo(() => {
        const reader = new reader_1.Reader();
        return reader.toSpec(reader.fromLang(markdown));
    }, [markdown]);
    return (React.createElement("div", Object.assign({ className: cn(`${ui_kit_1.Classes.NS}-markdown-viewer`, className) }, props), renderTree_1.renderTree(tree, 'root')));
};
exports.MarkdownViewer = MarkdownViewer;
//# sourceMappingURL=MarkdownViewer.js.map