"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_react_lite_1 = require("mobx-react-lite");
const utils_1 = require("../utils");
const useStore_1 = require("./useStore");
exports.useFilteredNodes = () => {
    const store = useStore_1.useStore();
    return mobx_react_lite_1.useComputed(() => {
        const list = [];
        if (store.nodes.length === 0) {
            return list;
        }
        const parentIDs = [];
        let prevNode = null;
        for (const node of store.nodes) {
            const isParentExpanded = prevNode === null || prevNode.level >= node.level;
            if (isParentExpanded && !store.isNodeExpanded(node)) {
                prevNode = node;
            }
            if (node[utils_1.DROP_ZONE_ID] === undefined) {
                parentIDs.length = node.level + 1;
                parentIDs[parentIDs.length - 1] = utils_1.generateRandomId();
                node[utils_1.DROP_ZONE_ID] = parentIDs.join('-');
            }
            if (isParentExpanded) {
                if (prevNode !== node) {
                    prevNode = null;
                }
                list.push(node);
            }
        }
        return list;
    });
};
//# sourceMappingURL=useFilteredNodes.js.map