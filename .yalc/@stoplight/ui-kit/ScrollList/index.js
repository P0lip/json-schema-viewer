"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const react_custom_scrollbars_1 = require("react-custom-scrollbars");
const ReactWindow = require("react-window");
const __1 = require("../");
const CustomScrollbars = React.forwardRef(({ onScroll, style, children }, ref) => {
    const handleRef = React.useCallback(scrollbarsRef => {
        if (scrollbarsRef) {
            ref(scrollbarsRef.view);
        }
        else {
            ref(null);
        }
    }, []);
    return (React.createElement(react_custom_scrollbars_1.default, { ref: handleRef, style: Object.assign({}, style, { overflow: 'hidden' }), onScroll: onScroll, autoHide: true, autoHideTimeout: 1000, autoHideDuration: 200 }, children));
});
const FixedSizeList = React.forwardRef(function FixedSizeList(props, ref) {
    const { className, children } = props, rest = tslib_1.__rest(props, ["className", "children"]);
    return (React.createElement(__1.AutoSizer, null, ({ width: listWidth, height: listHeight }) => (React.createElement(ReactWindow.FixedSizeList, Object.assign({}, rest, { height: listHeight, width: listWidth, outerRef: ref, outerElementType: CustomScrollbars }), children))));
});
exports.FixedSizeList = FixedSizeList;
FixedSizeList.displayName = 'FixedSizeList';
const VariableSizeList = React.forwardRef(function VariableSizeList(props, ref) {
    const { className, children } = props, rest = tslib_1.__rest(props, ["className", "children"]);
    return (React.createElement(__1.AutoSizer, null, ({ width: listWidth, height: listHeight }) => (React.createElement(ReactWindow.VariableSizeList, Object.assign({}, rest, { height: listHeight, width: listWidth, outerRef: ref, outerElementType: CustomScrollbars }), children))));
});
exports.VariableSizeList = VariableSizeList;
VariableSizeList.displayName = 'VariableSizeList';
var react_window_1 = require("react-window");
exports.areEqual = react_window_1.areEqual;
exports.shouldComponentUpdate = react_window_1.shouldComponentUpdate;
exports.IFixedSizeList = react_window_1.FixedSizeList;
//# sourceMappingURL=index.js.map