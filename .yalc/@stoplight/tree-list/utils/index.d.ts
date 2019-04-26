import { IRootNode, RendererFunc, TreeListNode } from '../types';
export * from './nodes';
export declare const root: Readonly<IRootNode>;
export declare const DROP_ZONE_ID: unique symbol;
export declare const DEFAULT_AUTO_EXPAND_DELAY = 800;
export declare const NODE_PADDING_MULTIPLIER = 15;
export declare const DEFAULT_ITEM_SIZE = 30;
export declare const defaultNodeRenderer: RendererFunc;
export declare const generateRandomId: () => string;
export declare function createGhost(text: string): HTMLElement;
export declare function getDragZone(nodes: TreeListNode[], node: TreeListNode): import("../types").ITreeListNode<object> | IRootNode | undefined;
