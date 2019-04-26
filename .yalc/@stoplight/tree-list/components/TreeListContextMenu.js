"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const ui_kit_1 = require("@stoplight/ui-kit");
const createMenu = (items) => {
    const menu = [];
    items.forEach((item, index) => {
        const { divider, children = [] } = item, props = tslib_1.__rest(item, ["divider", "children"]);
        if (divider) {
            menu.push(React.createElement(ui_kit_1.Menu.Divider, Object.assign({ key: index }, props)));
        }
        else {
            menu.push(React.createElement(ui_kit_1.Menu.Item, Object.assign({ key: index }, props), children.length ? createMenu(children) : null));
        }
    });
    return menu;
};
const TreeListContextMenu = (props) => {
    return React.createElement(ui_kit_1.Menu, null, createMenu(props.items));
};
exports.TreeListContextMenu = TreeListContextMenu;
//# sourceMappingURL=TreeListContextMenu.js.map