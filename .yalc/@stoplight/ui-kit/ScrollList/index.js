"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cn = require("classnames");
const React = require("react");
const ReactWindow = require("react-window");
const index_1 = require("../index");
const FixedSizeList = React.forwardRef(function FixedSizeList(props, ref) {
    const { className, autoHideTimeout = 500 } = props, rest = tslib_1.__rest(props, ["className", "autoHideTimeout"]);
    const [scrollOffset, setScrollOffset] = React.useState(null);
    const [scrollHeight, setScrollHeight] = React.useState(null);
    const [isScrolling, setIsScrolling] = React.useState(null);
    const outerRef = React.useRef(null);
    return (React.createElement(index_1.AutoSizer, null, ({ width: listWidth, height: listHeight }) => (React.createElement("div", { className: "relative overflow-hidden", style: { height: listHeight, width: listWidth } },
        React.createElement(ReactWindow.FixedSizeList, Object.assign({}, rest, { className: cn(className), style: { marginRight: -15 }, height: listHeight, width: listWidth + 15, outerRef: outerRef, onScroll: () => {
                if (outerRef.current) {
                    setScrollHeight(outerRef.current.scrollWidth);
                    setScrollOffset(outerRef.current.scrollTop);
                }
                if (isScrolling !== null) {
                    clearTimeout(isScrolling);
                }
                setIsScrolling(setTimeout(() => {
                    setIsScrolling(null);
                }, autoHideTimeout));
            } })),
        React.createElement("div", { className: cn(index_1.Classes.SCROLL_TRACK, 'vertical'), style: { width: 6 } },
            React.createElement("div", { className: cn(index_1.Classes.SCROLL_THUMB, !isScrolling && 'static'), style: {
                    display: 'block',
                    position: 'relative',
                    height: scrollHeight ? scrollHeight - 12 : 0,
                    width: '6px',
                    transform: `translateY(${scrollOffset}px)`,
                } }))))));
});
exports.FixedSizeList = FixedSizeList;
FixedSizeList.displayName = 'FixedSizeList';
const VariableSizeList = React.forwardRef(function VariableSizeList(props, ref) {
    const { className } = props, rest = tslib_1.__rest(props, ["className"]);
    return (React.createElement(index_1.AutoSizer, null, ({ width: listWidth, height: listHeight }) => (React.createElement(ReactWindow.VariableSizeList, Object.assign({}, rest, { ref: ref, className: cn(className), style: { marginRight: -15 }, height: listHeight, width: listWidth + 15 })))));
});
exports.VariableSizeList = VariableSizeList;
VariableSizeList.displayName = 'VariableSizeList';
var react_window_1 = require("react-window");
exports.areEqual = react_window_1.areEqual;
exports.shouldComponentUpdate = react_window_1.shouldComponentUpdate;
exports.IFixedSizeList = react_window_1.FixedSizeList;
//# sourceMappingURL=index.js.map