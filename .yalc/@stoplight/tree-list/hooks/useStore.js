"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("../components");
function useStore() {
    return react_1.useContext(components_1.TreeContext).store;
}
exports.useStore = useStore;
//# sourceMappingURL=useStore.js.map