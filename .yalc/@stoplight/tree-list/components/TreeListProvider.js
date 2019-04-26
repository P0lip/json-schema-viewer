"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const store_1 = require("../store");
const DraggableInstance_1 = require("./Draggable/DraggableInstance");
const TreeList_1 = require("./TreeList");
const defaultContext = {
    store: new store_1.TreeStore(),
    draggable: new DraggableInstance_1.DraggableInstance(),
};
const TreeContext = React.createContext(defaultContext);
exports.TreeContext = TreeContext;
const TreeListProvider = (_a) => {
    var { store, children } = _a, props = tslib_1.__rest(_a, ["store", "children"]);
    const context = Object.assign({}, defaultContext, { store });
    return (React.createElement(React.StrictMode, null,
        React.createElement(TreeContext.Provider, { value: context },
            React.createElement(TreeList_1.TreeList, Object.assign({}, props)))));
};
exports.TreeListProvider = TreeListProvider;
//# sourceMappingURL=TreeListProvider.js.map