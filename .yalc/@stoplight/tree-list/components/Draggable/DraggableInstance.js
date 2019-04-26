"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const highlighter_1 = require("./highlighter");
class DraggableInstance {
    constructor() {
        this.currentSearch = '';
        this.highlighter = new highlighter_1.Highlighter();
        this.dropPermissions = new Map();
    }
    clear() {
        this.highlighter.clearRange(this.currentDragZone);
        if (this.collapseTimeout !== undefined) {
            this.collapseTimeout = clearTimeout(this.collapseTimeout);
        }
        this.initialNode = undefined;
        this.initialDragZone = undefined;
        this.currentDragZone = undefined;
        this.dropPermissions.clear();
    }
}
exports.DraggableInstance = DraggableInstance;
//# sourceMappingURL=DraggableInstance.js.map