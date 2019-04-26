import { Omit } from '@stoplight/types';
import * as React from 'react';
import 'prismjs/components/';
interface ICodeEditorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    value: string;
    language: string;
    autoFocus?: boolean;
    onChange(code: string): any;
}
declare const CodeEditor: React.FunctionComponent<ICodeEditorProps>;
export { CodeEditor, ICodeEditorProps };
