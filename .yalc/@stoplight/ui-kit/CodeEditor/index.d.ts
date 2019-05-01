import { Omit } from '@stoplight/types';
import * as React from 'react';
interface ICodeEditorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    value: string;
    onChange(code: string): any;
    language?: string;
    autoFocus?: boolean;
}
declare const CodeEditor: React.FunctionComponent<ICodeEditorProps>;
export { CodeEditor, ICodeEditorProps };
