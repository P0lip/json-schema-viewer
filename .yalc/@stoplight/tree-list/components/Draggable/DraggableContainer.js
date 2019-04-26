"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const react_1 = require("react");
const hooks_1 = require("../../hooks");
const types_1 = require("../../types");
const TreeListProvider_1 = require("../TreeListProvider");
exports.DraggableContainer = (_a) => {
    var { children } = _a, props = tslib_1.__rest(_a, ["children"]);
    const store = hooks_1.useStore();
    const { draggable } = React.useContext(TreeListProvider_1.TreeContext);
    React.useEffect(() => {
        return () => draggable.clear();
    }, [draggable]);
    const onDragOver = react_1.useCallback(e => {
        if (draggable.currentDragZone !== undefined && draggable.dropPermissions.get(draggable.currentDragZone.id)) {
            e.preventDefault();
        }
    }, [draggable]);
    const onDragEnd = react_1.useCallback(() => draggable.clear(), [draggable]);
    const onDrop = react_1.useCallback(e => {
        e.preventDefault();
        const { initialNode, currentDragZone } = draggable;
        if (initialNode !== undefined && currentDragZone !== undefined) {
            try {
                store.emit(types_1.TreeListEvents.Drop, initialNode, currentDragZone);
            }
            catch (_a) { }
        }
        draggable.clear();
    }, [draggable, store]);
    return (React.createElement("div", Object.assign({}, props, { "data-root-drop-zone": true, onDrop: onDrop, onDragOver: onDragOver, onDragEnd: onDragEnd }), children));
};
//# sourceMappingURL=DraggableContainer.js.map