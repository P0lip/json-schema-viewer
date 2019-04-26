"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
class Highlighter {
    constructor() {
        this.cache = new WeakMap();
    }
    setRange(node) {
        const currentDropZoneId = node[utils_1.DROP_ZONE_ID];
        const dropZones = document.querySelectorAll('[data-drop-zone-id]') || [];
        dropZones.forEach(zone => {
            const zoneId = zone.dataset.dropZoneId;
            if (zoneId.includes(currentDropZoneId)) {
                zone.classList.add('TreeListItem-highlighted');
            }
        });
    }
    clearRange(node) {
        const currentDropZoneId = node && node[utils_1.DROP_ZONE_ID];
        const dropZones = document.querySelectorAll('[data-drop-zone-id]') || [];
        dropZones.forEach(zone => {
            const zoneId = zone.dataset.dropZoneId;
            if (!zoneId.includes(currentDropZoneId) || !currentDropZoneId) {
                zone.classList.remove('TreeListItem-highlighted');
            }
        });
    }
}
exports.Highlighter = Highlighter;
//# sourceMappingURL=highlighter.js.map