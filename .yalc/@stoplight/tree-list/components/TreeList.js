"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ScrollList_1 = require("@stoplight/ui-kit/ScrollList");
const cn = require("classnames");
const mobx_react_lite_1 = require("mobx-react-lite");
const React = require("react");
const hooks_1 = require("../hooks");
const DraggableContainer_1 = require("./Draggable/DraggableContainer");
const TreeListItem_1 = require("./TreeListItem");
const utils_1 = require("../utils");
const TreeList = mobx_react_lite_1.observer((props) => {
    const { className, striped, autoExpandDelay = utils_1.DEFAULT_AUTO_EXPAND_DELAY, rowHeight = utils_1.DEFAULT_ITEM_SIZE, rowRenderer = utils_1.defaultNodeRenderer, canDrag, canDrop, generateContextMenu } = props, rest = tslib_1.__rest(props, ["className", "striped", "autoExpandDelay", "rowHeight", "rowRenderer", "canDrag", "canDrop", "generateContextMenu"]);
    const { newNode } = hooks_1.useInternalState();
    const listRef = React.useRef(null);
    const nodes = hooks_1.useFilteredNodes();
    const itemCount = nodes.length + (newNode !== undefined ? 1 : 0);
    const itemData = {
        canDrag,
        canDrop,
        autoExpandDelay,
        rowRenderer,
        rowHeight,
        nodes,
        generateContextMenu,
    };
    React.useEffect(() => {
        if (listRef.current !== null && newNode !== undefined) {
            listRef.current.scrollToItem(newNode.index);
        }
    }, [newNode]);
    const itemKey = React.useCallback((index) => utils_1.getTreeListItemNode(nodes, index, newNode).id, [nodes, newNode]);
    const listProps = {
        itemData,
        itemKey,
        itemSize: rowHeight,
        itemCount,
        height: '100%',
        width: '100%',
        ref: listRef,
    };
    return (React.createElement(DraggableContainer_1.DraggableContainer, Object.assign({ className: cn(className, 'TreeList', striped && 'striped') }, rest),
        React.createElement(ScrollList_1.FixedSizeList, Object.assign({}, listProps), TreeListItem_1.TreeListItem)));
});
exports.TreeList = TreeList;
//# sourceMappingURL=TreeList.js.map