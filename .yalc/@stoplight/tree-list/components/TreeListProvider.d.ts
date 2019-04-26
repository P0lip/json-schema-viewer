import * as React from 'react';
import { ITreeListContext, ITreeListProvider } from '../types';
declare const TreeContext: React.Context<ITreeListContext>;
declare const TreeListProvider: React.FunctionComponent<ITreeListProvider>;
export { TreeListProvider, TreeContext };
