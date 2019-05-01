import { ThemeType } from '@stoplight/markdown/ast-types/smdast';
export interface ICodeAnnotations {
    title?: string;
    lineNumbers?: boolean;
    highlightLines?: number[][];
}
export interface IBlockquoteAnnotations {
    theme?: ThemeType;
}
export interface ITabAnnotations {
    title?: string;
}
