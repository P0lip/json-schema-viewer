import * as React from 'react';
import Scrollbars, { positionValues, ScrollbarProps } from 'react-custom-scrollbars';
interface IScrollContainer extends ScrollbarProps {
    innerRef?: React.RefObject<Scrollbars>;
    autoHeight?: boolean;
    autoHideTimeout?: number;
    onUpdate?: (values: positionValues) => void;
    scrollTo?: string;
    shadows?: boolean;
}
declare const ScrollContainer: React.FunctionComponent<IScrollContainer>;
export { IScrollContainer, ScrollContainer };
