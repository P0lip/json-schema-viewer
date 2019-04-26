import * as React from 'react';
import { IconStore, TreeListNode } from '../../types';
export interface INodeIcon {
    store: IconStore;
    node: TreeListNode;
    expanded?: boolean;
}
export declare const NodeIcon: React.FunctionComponent<INodeIcon>;
