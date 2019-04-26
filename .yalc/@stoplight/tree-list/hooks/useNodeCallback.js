"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useStore_1 = require("./useStore");
exports.useNodeCallback = (event, node) => {
    const store = useStore_1.useStore();
    return react_1.useCallback(e => {
        store.emit(event, e, node);
    }, [store, event, node]);
};
//# sourceMappingURL=useNodeCallback.js.map