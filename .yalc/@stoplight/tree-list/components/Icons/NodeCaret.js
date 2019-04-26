"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ui_kit_1 = require("@stoplight/ui-kit");
const cn = require("classnames");
const React = require("react");
const types_1 = require("../../types");
const nodes_1 = require("../../utils/nodes");
const DEFAULT_CARET_ICONS = {
    [types_1.TreeListCaretIcons.Down]: {
        icon: 'caret-down',
    },
    [types_1.TreeListCaretIcons.Right]: {
        icon: 'caret-right',
    },
};
exports.NodeCaret = (_a) => {
    var { expanded, node, store, children } = _a, props = tslib_1.__rest(_a, ["expanded", "node", "store", "children"]);
    let caret = null;
    if (nodes_1.isContainer(node)) {
        const iconProp = expanded
            ? store[types_1.TreeListCaretIcons.Down] || DEFAULT_CARET_ICONS[types_1.TreeListCaretIcons.Down]
            : store[types_1.TreeListCaretIcons.Right] || DEFAULT_CARET_ICONS[types_1.TreeListCaretIcons.Right];
        const icon = typeof iconProp === 'function' ? iconProp(node) : iconProp;
        if (icon) {
            caret = React.createElement(ui_kit_1.Icon, { icon: icon.icon, className: cn(icon.color && `text-${icon.color}`) });
        }
    }
    return React.createElement("span", { className: "TreeListItemCaret" }, caret);
};
//# sourceMappingURL=NodeCaret.js.map