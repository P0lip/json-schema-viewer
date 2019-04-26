"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.useScrollToHash = (elementId) => {
    const targetScrollTo = elementId || (typeof window !== 'undefined' ? window.location.hash : null);
    React.useEffect(() => {
        if (targetScrollTo) {
        }
    }, [targetScrollTo]);
};
//# sourceMappingURL=hooks.js.map