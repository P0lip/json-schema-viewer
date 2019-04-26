"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ui_kit_1 = require("@stoplight/ui-kit");
const cn = require("classnames");
const mobx_react_lite_1 = require("mobx-react-lite");
const React = require("react");
const hooks_1 = require("../hooks");
const types_1 = require("../types");
const utils_1 = require("../utils");
const _1 = require("./");
const TreeListContextMenu_1 = require("./TreeListContextMenu");
const TreeListProvider_1 = require("./TreeListProvider");
const TreeListItem = mobx_react_lite_1.observer((props) => {
    const { data, index, className: propClass } = props;
    const { nodes, rowRenderer, generateContextMenu } = data, rest = tslib_1.__rest(data, ["nodes", "rowRenderer", "generateContextMenu"]);
    const { newNode } = hooks_1.useInternalState();
    const { draggable } = React.useContext(TreeListProvider_1.TreeContext);
    const store = hooks_1.useStore();
    const node = utils_1.getTreeListItemNode(nodes, index, newNode);
    const isExpanded = store.isNodeExpanded(node);
    const className = cn(`TreeListItem TreeListItemLevel-${node.level}`, propClass, {
        active: store.activeNodeId === node.id,
    });
    const onClick = hooks_1.useNodeCallback(types_1.TreeListEvents.NodeClick, node);
    const onCaretClick = hooks_1.useNodeCallback(types_1.TreeListEvents.NodeCaretClick, node);
    return (React.createElement(_1.DraggableItem, Object.assign({ key: node.id, className: className, "data-drop-zone-id": node[utils_1.DROP_ZONE_ID], node: node, onClick: onClick, onContextMenu: (e) => {
            e.preventDefault();
            if (!generateContextMenu)
                return;
            const menuItems = generateContextMenu(node);
            if (menuItems && menuItems.length) {
                draggable.highlighter.setRange(node);
                ui_kit_1.ContextMenu.show(React.createElement(TreeListContextMenu_1.TreeListContextMenu, { items: menuItems }), { left: e.clientX, top: e.clientY }, () => {
                    draggable.highlighter.clearRange();
                });
            }
        }, nodes: nodes }, rest),
        React.createElement(_1.NodeCaret, { onClick: onCaretClick, expanded: isExpanded, store: store.icons, node: node }),
        React.createElement(_1.NodeIcon, { expanded: isExpanded, store: store.icons, node: node }),
        React.createElement("span", { className: "TreeListItemLabel" }, rowRenderer(node))));
});
exports.TreeListItem = TreeListItem;
//# sourceMappingURL=TreeListItem.js.map