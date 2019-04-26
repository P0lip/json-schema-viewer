"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mobx_1 = require("mobx");
const emitter_1 = require("./emitter");
const utils_1 = require("./utils");
const utils_2 = require("./utils");
const nodes_1 = require("./utils/nodes");
mobx_1.configure({ enforceActions: 'observed' });
class TreeStore extends emitter_1.createEmitter() {
    constructor(initialStore) {
        super();
        this.nodes = [];
        this.expanded = {};
        this.icons = {};
        this.defaultExpandedDepth = 0;
        this.internalState = {
            contextMenuId: utils_2.generateRandomId(),
        };
        this.modifyInternalState = (prop, value) => {
            this.internalState[prop] = value;
        };
        this.create = (parentNode, newNode, validate) => {
            let index = 0;
            if (parentNode !== null) {
                index = this.nodes.findIndex(({ id }) => id === parentNode.id);
                if (index === -1) {
                    if (process.env.NODE_ENV === 'development') {
                        console.warn(`Node with id: ${parentNode.id} was not found. The operation is no-op`);
                    }
                    return Promise.reject();
                }
            }
            const parent = parentNode === null ? utils_1.root : this.nodes[index++];
            if (nodes_1.isRoot(parent) || nodes_1.isContainer(parent)) {
                if (!nodes_1.isRoot(parent)) {
                    this.toggleExpand(parent, true);
                }
                const id = utils_2.generateRandomId();
                return new Promise((resolve, reject) => {
                    Object.assign(this.internalState, {
                        editedNodeId: id,
                        newNode: Object.assign({ name: '', type: '' }, newNode, { id,
                            index, level: nodes_1.isRoot(parent) ? 0 : parent.level + 1 }),
                        onFinish: (createdNode, parentNode) => {
                            if (validate !== undefined) {
                                validate(createdNode, parentNode);
                            }
                            this.cancel();
                            resolve(createdNode);
                        },
                        onCancel: () => {
                            this.cancel();
                            reject();
                        },
                    });
                });
            }
            return Promise.reject();
        };
        this.rename = (node, validate) => {
            return new Promise((resolve, reject) => {
                Object.assign(this.internalState, {
                    editedNodeId: node.id,
                    onFinish: (renamedNode, parentNode) => {
                        if (validate !== undefined) {
                            validate(renamedNode, parentNode);
                        }
                        this.cancel();
                        resolve(renamedNode);
                    },
                    onCancel: () => {
                        this.cancel();
                        reject();
                    },
                });
            });
        };
        this.toggleExpand = (node, flag) => {
            const { expanded } = this;
            if (typeof flag === 'boolean' && flag === expanded[node.id]) {
                return;
            }
            this.expanded[node.id] = flag !== undefined ? flag : !this.isNodeExpanded(node);
        };
        if (initialStore !== undefined) {
            Object.assign(this, initialStore);
        }
    }
    isNodeExpanded(node) {
        return (!(node.id in this.expanded) && node.level <= this.defaultExpandedDepth) || this.expanded[node.id] === true;
    }
    cancel() {
        Object.assign(this.internalState, {
            newNode: undefined,
            editedNodeId: undefined,
            onFinish: undefined,
            onCancel: undefined,
        });
    }
}
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", String)
], TreeStore.prototype, "activeNodeId", void 0);
tslib_1.__decorate([
    mobx_1.observable.shallow,
    tslib_1.__metadata("design:type", Array)
], TreeStore.prototype, "nodes", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], TreeStore.prototype, "expanded", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], TreeStore.prototype, "icons", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], TreeStore.prototype, "defaultExpandedDepth", void 0);
tslib_1.__decorate([
    mobx_1.observable,
    tslib_1.__metadata("design:type", Object)
], TreeStore.prototype, "internalState", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], TreeStore.prototype, "modifyInternalState", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], TreeStore.prototype, "create", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], TreeStore.prototype, "rename", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Object)
], TreeStore.prototype, "toggleExpand", void 0);
tslib_1.__decorate([
    mobx_1.action,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], TreeStore.prototype, "cancel", null);
exports.TreeStore = TreeStore;
//# sourceMappingURL=store.js.map