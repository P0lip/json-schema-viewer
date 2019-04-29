"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ui_kit_1 = require("@stoplight/ui-kit");
const cn = require("classnames");
const React = require("react");
const nodes_1 = require("./nodes");
tslib_1.__exportStar(require("./nodes"), exports);
exports.root = Object.freeze({
    id: null,
});
exports.DROP_ZONE_ID = Symbol('DROP_ZONE_ID');
exports.DEFAULT_AUTO_EXPAND_DELAY = 800;
exports.NODE_PADDING_MULTIPLIER = 15;
exports.DEFAULT_ITEM_SIZE = 30;
exports.defaultNodeRenderer = node => React.createElement("span", { className: "TreeListItemLabel" }, node.name);
exports.generateRandomId = () => {
    return Math.random()
        .toString(36)
        .slice(2);
};
function createGhost(text) {
    const effect = document.createElement('span');
    effect.textContent = text;
    effect.className = cn(ui_kit_1.Classes.TAG, ui_kit_1.Classes.ROUND);
    return document.body.appendChild(effect);
}
exports.createGhost = createGhost;
function getDragZone(nodes, node) {
    return nodes_1.isContainer(node) ? node : nodes_1.getParent(nodes, node);
}
exports.getDragZone = getDragZone;
//# sourceMappingURL=index.js.map