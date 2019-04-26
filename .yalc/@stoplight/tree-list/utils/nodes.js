"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
exports.isContainer = (node) => 'canHaveChildren' in node && !!node.canHaveChildren;
exports.isRoot = (node) => node.id === null;
exports.isNew = (node) => 'index' in node;
exports.findNodeIndex = (nodes, node) => {
    return exports.isNew(node) ? node.index : nodes.findIndex(({ id }) => node.id === id);
};
exports.getTreeListItemNode = (nodes, index, newNode) => {
    if (newNode === undefined || newNode.index > index) {
        return nodes[index];
    }
    if (newNode.index === index) {
        return newNode;
    }
    return nodes[index - 1];
};
exports.getParent = (nodes, node) => {
    if (node.level === 0) {
        return _1.root;
    }
    let index = exports.findNodeIndex(nodes, node);
    if (index === -1) {
        return;
    }
    if (index === 0) {
        return _1.root;
    }
    let currentNode = node;
    while (index > 0 && currentNode.level !== node.level - 1) {
        currentNode = nodes[--index];
    }
    return currentNode;
};
exports.getRange = (nodes, startNode, endNode) => {
    let index = 0;
    if (!exports.isRoot(startNode)) {
        index = exports.findNodeIndex(nodes, startNode);
        if (index === -1) {
            return [];
        }
        index++;
    }
    const range = exports.isRoot(startNode) ? [] : [startNode];
    while (index < nodes.length) {
        const currentNode = nodes[index];
        if (endNode !== undefined && endNode.id === currentNode.id) {
            break;
        }
        if (!exports.isRoot(startNode) && currentNode.level <= startNode.level) {
            break;
        }
        range.push(nodes[index]);
        index++;
    }
    return range;
};
exports.getSiblings = (nodes, node) => {
    const index = exports.findNodeIndex(nodes, node);
    const siblings = [];
    let startLeftIndex = index;
    let startRightIndex = index;
    while (--startLeftIndex >= 0) {
        const currentNode = nodes[startLeftIndex];
        if (currentNode.level === node.level - 1) {
            break;
        }
        if (currentNode.level === node.level) {
            siblings.push(currentNode);
        }
    }
    while (++startRightIndex < nodes.length) {
        const currentNode = nodes[startRightIndex];
        if (currentNode.level === node.level - 1) {
            break;
        }
        if (currentNode.level === node.level) {
            siblings.push(currentNode);
        }
    }
    return siblings;
};
//# sourceMappingURL=nodes.js.map