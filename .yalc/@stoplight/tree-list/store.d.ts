import { Dictionary } from '@stoplight/types';
import { IconStore, IInternalState, ITreeCreateable, ITreeExpandable, ITreeListEvents, ITreeRenameable, NodeValidator, TreeListNode } from './types';
declare const TreeStore_base: new () => import("strict-event-emitter-types/types/src").StrictEventEmitter<import("@stoplight/lifecycle").IEventEmitterInstance, ITreeListEvents, ITreeListEvents, "addListener" | "addEventListener" | "removeListener" | "removeEventListener" | "once", "on" | "emit">;
export declare class TreeStore extends TreeStore_base implements ITreeExpandable, ITreeCreateable, ITreeRenameable {
    activeNodeId?: string;
    nodes: TreeListNode[];
    expanded: Dictionary<boolean>;
    icons: IconStore;
    defaultExpandedDepth: number;
    internalState: IInternalState;
    constructor(initialStore?: Partial<Pick<TreeStore, 'nodes' | 'expanded' | 'icons' | 'defaultExpandedDepth'>>);
    readonly modifyInternalState: (prop: "editedNodeId" | "contextMenuId" | "contextMenuNodeId" | "newNode" | "onFinish" | "onCancel", value: string | import("./types").INewNode<object> | ((node: import("./types").ITreeListNode<object>, parentNode?: import("./types").ITreeListNode<object> | import("./types").IRootNode | undefined) => void) | (() => void) | undefined) => void;
    readonly create: (parentNode: import("./types").ITreeListNode<object> | import("./types").IRootNode | null, newNode?: Partial<import("./types").ITreeListNode<object>> | undefined, validate?: NodeValidator | undefined) => Promise<import("./types").ITreeListNode<object>>;
    readonly rename: (node: import("./types").ITreeListNode<object>, validate?: NodeValidator | undefined) => Promise<import("./types").ITreeListNode<object>>;
    readonly toggleExpand: (node: import("./types").ITreeListNode<object>, flag?: boolean | undefined) => void;
    isNodeExpanded(node: TreeListNode): boolean;
    cancel(): void;
}
export {};
