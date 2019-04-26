"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ui_kit_1 = require("@stoplight/ui-kit");
const cn = require("classnames");
const React = require("react");
exports.NodeIcon = ({ expanded, store, node }) => {
    const iconProps = node.type && ((expanded && store[`${node.type}:expanded`]) || store[node.type]);
    const icon = typeof iconProps === 'function' ? iconProps(node) : iconProps;
    return icon ? (React.createElement("div", { className: "TreeListItemIcon" },
        React.createElement(ui_kit_1.Icon, { icon: icon.icon, className: cn(icon.color && `text-${icon.color}`) }))) : null;
};
//# sourceMappingURL=NodeIcon.js.map