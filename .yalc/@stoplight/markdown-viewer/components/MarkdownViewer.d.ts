import * as React from 'react';
interface IMarkdownViewer extends React.HTMLAttributes<HTMLDivElement> {
    markdown: string;
}
declare const MarkdownViewer: React.FunctionComponent<IMarkdownViewer>;
export { IMarkdownViewer, MarkdownViewer };
