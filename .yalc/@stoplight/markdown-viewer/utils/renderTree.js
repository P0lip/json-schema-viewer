"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cn = require("classnames");
const React = require("react");
const ui_kit_1 = require("@stoplight/ui-kit");
const CodeViewer_1 = require("@stoplight/ui-kit/CodeViewer");
const getCodeLanguage_1 = require("./getCodeLanguage");
const GENERIC_NODES = {
    strong: 'strong',
    emphasis: 'i',
    delete: 's',
    paragraph: 'p',
};
const renderNodeChildren = (node) => {
    if (Array.isArray(node.children) && node.children.length > 0) {
        return React.createElement(React.Fragment, null, node.children.map((child, i) => exports.renderTree(child, i)));
    }
    return null;
};
exports.renderTree = (node, key) => {
    switch (node.type) {
        case 'blockquote':
            const { annotations } = node;
            return (React.createElement(ui_kit_1.Callout, { key: key, className: cn(ui_kit_1.Classes.BLOCKQUOTE), intent: ((annotations && annotations.theme) || 'primary'), icon: null }, renderNodeChildren(node)));
        case 'definition':
            return null;
        case 'inlineCode':
            return React.createElement(CodeViewer_1.CodeViewer, { key: key, className: "inline-block line-none", value: String(node.value), inline: true });
        case 'code': {
            const { lang, value, annotations } = node;
            const language = getCodeLanguage_1.getCodeLanguage(lang);
            let showLineNumbers = annotations !== undefined && 'lineNumbers' in annotations ? !!annotations.lineNumbers : true;
            if (!language || ['md', 'markdown', 'bash', 'shell'].includes(language)) {
                showLineNumbers = false;
            }
            return (React.createElement(CodeViewer_1.CodeViewer, { key: key, className: "my-6 overflow-auto", value: String(value), language: language, showLineNumbers: showLineNumbers }));
        }
        case 'image':
            return React.createElement("img", { key: key, src: node.url, title: node.title, alt: node.alt });
        case 'imageReference':
            return React.createElement("span", { key: key }, String(node.label));
        case 'link':
            return (React.createElement("a", { key: key, href: node.url, title: node.title }, renderNodeChildren(node)));
        case 'heading':
            return React.createElement(`h${node.depth}`, {
                key,
                className: ui_kit_1.Classes.HEADING,
                children: renderNodeChildren(node),
            });
        case 'html':
            return (React.createElement("pre", { key: key, className: ui_kit_1.Classes.CODE_BLOCK }, String(node.value)));
        case 'linkReference':
            return React.createElement("span", { key: key }, String(node.label));
        case 'list':
            const ordered = node.ordered;
            return React.createElement(ordered ? 'ol' : 'ul', { key, className: cn(ui_kit_1.Classes.LIST, ordered ? 'list-decimal' : 'list-disc') }, renderNodeChildren(node));
        case 'listItem':
            if (node.checked !== null) {
                return (React.createElement("li", { key: key },
                    React.createElement(ui_kit_1.Checkbox, { className: "my-0 mr-3 inline-flex", checked: !!node.checked }),
                    renderNodeChildren(node)));
            }
            return React.createElement("li", { key: key }, renderNodeChildren(node));
        case 'table':
            const { align } = node;
            return (React.createElement(ui_kit_1.HTMLTable, { key: key, className: "my-6 border-l border-r border-b", condensed: true, bordered: true, striped: true },
                React.createElement("tbody", null, node.children.map((row, rowIndex) => (React.createElement("tr", { key: rowIndex }, row.children.map((cell, i) => (React.createElement("td", { key: i, className: cn(align[i] && `text-${align[i]}`) }, renderNodeChildren(cell))))))))));
        case 'tabContainer':
            return (React.createElement("div", { key: key, className: "my-6" },
                React.createElement(ui_kit_1.Tabs, { id: "tabs" }, node.children.map((child, i) => (React.createElement(ui_kit_1.Tab, { id: child.annotations.title, key: i }, child.annotations.title))))));
        case 'text':
            return React.createElement(React.Fragment, { key: key }, String(node.value));
        case 'thematicBreak':
            return React.createElement("br", { key: key, className: "my-6 opactiy-75 border-2" });
        case 'root':
            return renderNodeChildren(node);
        default:
            if (node.type in GENERIC_NODES) {
                return React.createElement(GENERIC_NODES[node.type], { key }, renderNodeChildren(node));
            }
    }
    return null;
};
//# sourceMappingURL=renderTree.js.map