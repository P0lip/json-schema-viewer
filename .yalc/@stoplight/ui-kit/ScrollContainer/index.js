"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cn = require("classnames");
const React = require("react");
const react_custom_scrollbars_1 = require("react-custom-scrollbars");
const __1 = require("../");
const hooks_1 = require("./hooks");
const utils_1 = require("./utils");
const ScrollContainer = props => {
    const { scrollTo, children, onUpdate, autoHideTimeout = 500, innerRef, style } = props, scrollbarProps = tslib_1.__rest(props, ["scrollTo", "children", "onUpdate", "autoHideTimeout", "innerRef", "style"]);
    const [isScrolling, setIsScrolling] = React.useState(null);
    hooks_1.useScrollToHash(scrollTo);
    const scrollbars = innerRef || React.useRef(null);
    const position = (scrollbars.current && scrollbars.current.getValues()) || {};
    const { clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth } = position;
    const thumbHorizontal = utils_1.getThumbDimension({ scroll: scrollWidth, client: clientWidth }) || 0;
    const thumbVertical = utils_1.getThumbDimension({ scroll: scrollHeight, client: clientHeight }) || 0;
    return (React.createElement(react_custom_scrollbars_1.default, Object.assign({}, scrollbarProps, { style: style, ref: scrollbars, autoHideTimeout: autoHideTimeout, onUpdate: onUpdate, onScroll: (e) => {
            if (isScrolling !== null) {
                clearTimeout(isScrolling);
            }
            setIsScrolling(setTimeout(() => {
                setIsScrolling(null);
            }, autoHideTimeout));
        }, renderView: ({ style }) => {
            return (React.createElement("div", { style: Object.assign({}, style, { marginRight: '-15px', marginBottom: '-15px' }) }));
        }, renderTrackHorizontal: hTrackProps => React.createElement("div", Object.assign({}, hTrackProps, { className: cn(__1.Classes.SCROLL_TRACK, 'horizontal') })), renderThumbHorizontal: (_a) => {
            var { ref: hThumbRef, style: hThumbStyle = {} } = _a, hThumbRest = tslib_1.__rest(_a, ["ref", "style"]);
            return (React.createElement("div", Object.assign({}, hThumbRest, { ref: hThumbRef, className: cn(__1.Classes.SCROLL_THUMB, !isScrolling && 'static'), style: Object.assign({}, hThumbStyle, { height: '6px', width: thumbHorizontal, transform: `translateX(${utils_1.getScrollTransform(clientWidth, scrollWidth, scrollLeft, thumbHorizontal)}px)` }) })));
        }, renderTrackVertical: vTrackProps => React.createElement("div", Object.assign({}, vTrackProps, { className: cn(__1.Classes.SCROLL_TRACK, 'vertical') })), renderThumbVertical: (_a) => {
            var { ref: vThumbRef, style: vThumbStyle = {} } = _a, vThumbRest = tslib_1.__rest(_a, ["ref", "style"]);
            return (React.createElement("div", Object.assign({}, vThumbRest, { ref: vThumbRef, className: cn(__1.Classes.SCROLL_THUMB, !isScrolling && 'static'), style: Object.assign({}, vThumbStyle, { height: thumbVertical, width: '6px', transform: `translateY(${utils_1.getScrollTransform(clientHeight, scrollHeight, scrollTop, thumbVertical)}px)` }) })));
        } }), children));
};
exports.ScrollContainer = ScrollContainer;
ScrollContainer.displayName = 'ScrollContainer';
//# sourceMappingURL=index.js.map