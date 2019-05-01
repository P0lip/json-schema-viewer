"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_react_lite_1 = require("mobx-react-lite");
const React = require("react");
const hooks_1 = require("../../hooks");
const utils_1 = require("../../utils");
const TreeListProvider_1 = require("../TreeListProvider");
exports.DraggableItem = mobx_react_lite_1.observer((props) => {
    const { node, nodes, autoExpandDelay, canDrop, canDrag, rowHeight, rowRenderer, className } = props, rest = tslib_1.__rest(props, ["node", "nodes", "autoExpandDelay", "canDrop", "canDrag", "rowHeight", "rowRenderer", "className"]);
    const { draggable } = React.useContext(TreeListProvider_1.TreeContext);
    const store = hooks_1.useStore();
    const dragZone = utils_1.getDragZone(nodes, node);
    const dragHandler = React.useCallback((zone) => {
        const { dropPermissions, currentDragZone, initialDragZone, collapseTimeout, initialNode, highlighter, } = draggable;
        if (collapseTimeout !== undefined) {
            draggable.collapseTimeout = clearTimeout(collapseTimeout);
        }
        if (initialDragZone === undefined || initialNode === undefined)
            return;
        let isDropAllowed = dropPermissions.get(zone.id);
        if (isDropAllowed === undefined) {
            isDropAllowed = canDrop === undefined || canDrop(initialNode, zone);
            dropPermissions.set(zone.id, !!isDropAllowed);
        }
        if (currentDragZone !== undefined) {
            highlighter.clearRange(currentDragZone);
        }
        if (zone.id === initialDragZone.id || !isDropAllowed) {
            draggable.currentDragZone = undefined;
            highlighter.clearRange();
            return;
        }
        draggable.currentDragZone = zone;
        highlighter.setRange(zone);
        if (utils_1.isContainer(node)) {
            draggable.collapseTimeout = setTimeout(store.toggleExpand, autoExpandDelay, node, true);
        }
    }, [node, store.toggleExpand, dragZone, draggable, canDrop]);
    const onDragEnter = React.useCallback(() => {
        dragHandler(dragZone);
    }, [dragZone, dragHandler]);
    const onDragStart = React.useCallback(e => {
        if (canDrag !== undefined && !canDrag(node)) {
            e.preventDefault();
            return;
        }
        draggable.currentDragZone = dragZone;
        draggable.initialDragZone = dragZone;
        draggable.initialNode = node;
        const parent = utils_1.getParent(nodes, node);
        if (parent) {
            draggable.dropPermissions.set(parent.id, false);
        }
        const dragImg = utils_1.createGhost(node.name);
        e.dataTransfer.effectAllowed = 'copyMove';
        e.dataTransfer.setDragImage(dragImg, -10, -10);
        e.dataTransfer.setData('text/plain', node.id);
        setTimeout(() => document.body.removeChild(dragImg), 0);
        if (utils_1.isContainer(node)) {
            store.toggleExpand(node, false);
        }
    }, [node, store.toggleExpand, draggable, canDrag]);
    const onDragLeave = React.useCallback(e => {
        if (e.relatedTarget &&
            'closest' in e.relatedTarget &&
            !e.relatedTarget.closest('[data-drop-zone-id]') &&
            !!e.relatedTarget.closest('[data-root-drop-zone]')) {
            dragHandler(utils_1.root);
        }
    }, [dragHandler]);
    return (React.createElement("div", Object.assign({}, rest, { className: className, draggable: true, onDragStart: onDragStart, onDragEnter: onDragEnter, onDragLeave: onDragLeave })));
});
//# sourceMappingURL=DraggableItem.js.map