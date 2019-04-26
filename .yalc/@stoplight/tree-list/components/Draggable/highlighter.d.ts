import { IDraggableHighlighter, TreeListParentNode } from '../../types';
export declare class Highlighter implements IDraggableHighlighter {
    protected cache: WeakMap<import("../../types").ITreeListNode<object> | import("../../types").IRootNode, HTMLStyleElement>;
    setRange(node: TreeListParentNode): void;
    clearRange(node?: TreeListParentNode): void;
}
