"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cn = require("classnames");
const React = require("react");
const ReactWindow = require("react-window");
const index_1 = require("../index");
const FixedSizeList = React.forwardRef(function FixedSizeList(props, ref) {
    const { className } = props, rest = tslib_1.__rest(props, ["className"]);
    return (React.createElement(index_1.AutoSizer, null, ({ width: listWidth, height: listHeight }) => (React.createElement(ReactWindow.FixedSizeList, Object.assign({}, rest, { className: cn(className), ref: ref, height: listHeight, width: listWidth })))));
});
exports.FixedSizeList = FixedSizeList;
FixedSizeList.displayName = 'FixedSizeList';
const VariableSizeList = React.forwardRef(function VariableSizeList(props, ref) {
    const { className } = props, rest = tslib_1.__rest(props, ["className"]);
    return (React.createElement(index_1.AutoSizer, null, ({ width: listWidth, height: listHeight }) => (React.createElement(ReactWindow.VariableSizeList, Object.assign({}, rest, { ref: ref, className: cn(className), height: listHeight, width: listWidth })))));
});
exports.VariableSizeList = VariableSizeList;
VariableSizeList.displayName = 'VariableSizeList';
var react_window_1 = require("react-window");
exports.areEqual = react_window_1.areEqual;
exports.shouldComponentUpdate = react_window_1.shouldComponentUpdate;
exports.IFixedSizeList = react_window_1.FixedSizeList;
//# sourceMappingURL=index.js.map