import * as React from 'react';
import * as ReactWindow from 'react-window';
interface IFixedSizeListProps extends ReactWindow.FixedSizeListProps {
    className?: string;
}
declare const FixedSizeList: React.FunctionComponent<IFixedSizeListProps>;
interface IVariableSizeListProps extends ReactWindow.VariableSizeListProps {
    className?: string;
}
declare const VariableSizeList: React.FunctionComponent<IVariableSizeListProps>;
export { areEqual, shouldComponentUpdate, ListItemKeySelector, FixedSizeList as IFixedSizeList } from 'react-window';
export { IFixedSizeListProps, FixedSizeList, IVariableSizeListProps, VariableSizeList };
