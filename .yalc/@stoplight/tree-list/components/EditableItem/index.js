"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ui_kit_1 = require("@stoplight/ui-kit");
const React = require("react");
const hooks_1 = require("../../hooks");
const utils_1 = require("../../utils");
const utils_2 = require("./utils");
const EditableItem = (_a) => {
    var { node } = _a, rest = tslib_1.__rest(_a, ["node"]);
    const { nodes } = hooks_1.useStore();
    const { onFinish, onCancel } = hooks_1.useInternalState();
    const { name, ext: extension } = utils_2.parseFilename(node.name);
    const filenames = React.useMemo(() => utils_1.getSiblings(nodes, node).map(n => n.name), [nodes, node]);
    const parentNode = React.useMemo(() => utils_1.getParent(nodes, node), [nodes, node]);
    const [newName, setNewName] = React.useState(name);
    const [errorMessage, setErrorMessage] = React.useState(null);
    const onChange = React.useCallback(val => {
        setNewName(val);
        if (val === name) {
            setErrorMessage(null);
        }
        else {
            setErrorMessage(utils_2.validateLength(val) || utils_2.validateUniqueness(filenames, utils_2.toBase(val, extension)));
        }
    }, [filenames, name]);
    const onConfirm = React.useCallback(val => {
        if (errorMessage !== null)
            return;
        const newBase = utils_2.toBase(newName, extension);
        const actualNode = Object.assign({}, node, { name: newBase });
        try {
            onFinish(actualNode, parentNode);
        }
        catch (ex) {
            setErrorMessage(ex.message);
        }
    }, [newName, extension, node, parentNode]);
    const onInputCancel = React.useCallback(val => {
        onCancel();
    }, [newName, extension, node, parentNode]);
    return (React.createElement("div", Object.assign({}, rest),
        React.createElement(ui_kit_1.EditableText, { onConfirm: onConfirm, onCancel: onInputCancel, onChange: onChange, value: newName }),
        extension,
        errorMessage !== null && React.createElement("div", null, errorMessage)));
};
exports.EditableItem = EditableItem;
//# sourceMappingURL=index.js.map