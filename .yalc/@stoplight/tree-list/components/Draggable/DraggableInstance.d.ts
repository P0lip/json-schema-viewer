/// <reference types="node" />
import { IDraggableInstance, TreeListNode, TreeListParentNode } from '../../types';
import { Highlighter } from './highlighter';
export declare class DraggableInstance implements IDraggableInstance {
    currentSearch: string;
    currentDragZone?: TreeListParentNode;
    initialDragZone?: TreeListParentNode;
    initialNode?: TreeListNode;
    collapseTimeout?: number | void | NodeJS.Timer;
    highlighter: Highlighter;
    dropPermissions: Map<string, boolean>;
    clear(): void;
}
