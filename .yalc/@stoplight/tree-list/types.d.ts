/// <reference types="node" />
import { Dictionary } from '@stoplight/types';
import { COLORS, IMenuItemProps } from '@stoplight/ui-kit';
import { IconName } from '@stoplight/ui-kit/Icons';
import * as React from 'react';
import { TreeStore } from './store';
export interface ITreeListContext {
    store: TreeStore;
    draggable: IDraggableInstance;
}
export interface ITreeListProvider extends ITreeList {
    store: TreeStore;
}
export interface ITreeList extends React.HTMLAttributes<HTMLDivElement> {
    autoExpandDelay?: number;
    rowHeight?: number;
    rowRenderer?: RendererFunc;
    striped?: boolean;
    canDrag?: (node: TreeListNode) => boolean;
    canDrop?: (node: TreeListNode, parentNode: TreeListParentNode) => boolean;
    generateContextMenu?: (node: TreeListNode) => ITreeListContextMenuItem[] | void;
}
export interface ITreeListItem extends React.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
    index: number;
    data: ITreeListItemData;
}
export interface ITreeListItemData extends Pick<ITreeList, 'autoExpandDelay' | 'rowHeight' | 'rowRenderer' | 'canDrag' | 'canDrop' | 'generateContextMenu' | 'striped'> {
    nodes: TreeListNode[];
}
export interface ITreeListContextMenu {
    items: ITreeListContextMenuItem[];
}
export interface ITreeListContextMenuItem extends IMenuItemProps {
    divider?: boolean;
    children?: ITreeListContextMenuItem[];
}
export interface IDraggableContainer extends React.HTMLAttributes<HTMLDivElement> {
}
export interface IDraggableItem extends ITreeListItemData, React.HTMLAttributes<HTMLDivElement> {
    node: TreeListNode;
}
export interface IDraggableInstance {
    currentDragZone?: TreeListParentNode;
    initialDragZone?: TreeListParentNode;
    initialNode?: TreeListNode;
    dropPermissions: Map<TreeListNode['id'] | IRootNode['id'], boolean>;
    highlighter: IDraggableHighlighter;
    collapseTimeout?: number | void | NodeJS.Timer;
    clear(): void;
}
export interface IDraggableHighlighter {
    setRange(parentNode: TreeListParentNode): void;
    clearRange(parentNode?: TreeListParentNode): void;
}
export declare type TreeListMouseEventHandler = (e: React.MouseEvent<HTMLElement>, node: TreeListNode) => void;
export declare type TreeListDropEventHandler = (node: TreeListNode, parentNode: TreeListParentNode) => void;
export declare enum TreeListEvents {
    NodeClick = "node.click",
    NodeMouseEnter = "node.mouseenter",
    NodeMouseLeave = "node.mouseexit",
    NodeDoubleClick = "node.doubleClick",
    NodeCaretClick = "node.caretClick",
    Drop = "drop"
}
export interface ITreeListEvents {
    [TreeListEvents.NodeClick]: TreeListMouseEventHandler;
    [TreeListEvents.NodeMouseEnter]: TreeListMouseEventHandler;
    [TreeListEvents.NodeMouseLeave]: TreeListMouseEventHandler;
    [TreeListEvents.NodeDoubleClick]: TreeListMouseEventHandler;
    [TreeListEvents.NodeCaretClick]: TreeListMouseEventHandler;
    [TreeListEvents.Drop]: TreeListDropEventHandler;
}
export declare type TreeListNodeType = string;
export interface ITreeListNode<T extends object = object> {
    id: string;
    level: number;
    name: string;
    type?: TreeListNodeType;
    canHaveChildren?: boolean;
    className?: string;
    metadata?: T;
}
export interface IRootNode {
    id: null;
}
export interface INewNode<T extends object = object> extends ITreeListNode<T> {
    index: number;
}
export declare type TreeListNode<T extends object = object> = ITreeListNode<T>;
export declare type TreeListParentNode<T extends object = object> = TreeListNode<T> | IRootNode;
export declare type RendererFunc = (node: TreeListNode) => React.ReactNode;
export interface ITreeExpandable {
    expanded?: Dictionary<boolean>;
    readonly toggleExpand: (node: ITreeListNode, flag?: boolean) => void;
}
export declare type NodeValidator = (node: TreeListNode, parentNode?: TreeListParentNode) => string | void;
export interface ITreeCreateable {
    readonly create: (parentNode: TreeListParentNode | null, newNode?: Partial<TreeListNode>, validate?: NodeValidator) => Promise<TreeListNode>;
}
export interface ITreeRenameable {
    readonly rename: (node: TreeListNode, validate?: NodeValidator) => Promise<TreeListNode>;
}
export interface IInternalState {
    editedNodeId?: TreeListNode['id'];
    contextMenuId: string;
    contextMenuNodeId?: TreeListNode['id'];
    newNode?: INewNode;
    onFinish?(node: TreeListNode, parentNode?: TreeListParentNode): void;
    onCancel?(): void;
}
export declare type IconStore = Dictionary<ITreeListIcon | ITreeListCustomIcon, TreeListNodeType>;
export declare type ITreeListCustomIcon = (node: TreeListNode) => ITreeListIcon | void;
export declare enum TreeListCaretIcons {
    Right = "right",
    Down = "down"
}
export interface ITreeListIcon {
    icon: IconName;
    color?: COLORS;
}
