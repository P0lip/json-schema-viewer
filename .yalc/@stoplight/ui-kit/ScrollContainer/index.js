"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cn = require("classnames");
const React = require("react");
const react_custom_scrollbars_1 = require("react-custom-scrollbars");
const __1 = require("../");
const hooks_1 = require("./hooks");
const ScrollContainer = props => {
    hooks_1.useScrollToHash(props.scrollTo);
    const [showShadowOnMount, setShowShadowOnMount] = React.useState(props.shadows);
    const { scrollTo, children, shadows = true, innerRef, onScroll, style } = props, scrollbarProps = tslib_1.__rest(props, ["scrollTo", "children", "shadows", "innerRef", "onScroll", "style"]);
    const scrollbars = innerRef || React.useRef(null);
    const scrollPosition = (scrollbars.current && scrollbars.current.getValues()) || {};
    const { scrollTop, scrollHeight, clientHeight } = scrollPosition;
    const shadowTop = shadows && scrollTop;
    const shadowBottom = showShadowOnMount || (shadows && scrollHeight && scrollHeight - scrollTop !== clientHeight);
    return (React.createElement(react_custom_scrollbars_1.default, Object.assign({}, scrollbarProps, { ref: scrollbars, autoHide: true, autoHideTimeout: 1000, autoHideDuration: 300, onScroll: (e) => {
            if (onScroll)
                onScroll(e);
            setShowShadowOnMount(false);
        }, renderView: ({ style }) => {
            return (React.createElement("div", { className: cn(__1.Classes.SCROLL_CONTAINER, shadowTop && 'shadow-top', shadowBottom && 'shadow-bottom'), style: Object.assign({}, style, { marginRight: '-15px', marginBottom: '-15px' }) }));
        }, renderTrackHorizontal: ({ style }) => (React.createElement("div", { style: Object.assign({}, style, { borderRadius: 3, right: 10, bottom: 2, left: 2 }) })), renderThumbHorizontal: hThumbProps => React.createElement("div", Object.assign({}, hThumbProps, { className: "bg-darken-5 dark:bg-darken-8 rounded" })), renderTrackVertical: ({ style }) => (React.createElement("div", { style: Object.assign({}, style, { borderRadius: 3, bottom: 10, right: 2, top: 2 }) })), renderThumbVertical: vThumbProps => React.createElement("div", Object.assign({}, vThumbProps, { className: "bg-darken-5 dark:bg-darken-8 rounded" })) }), children));
};
exports.ScrollContainer = ScrollContainer;
ScrollContainer.displayName = 'ScrollContainer';
//# sourceMappingURL=index.js.map