import { ITreeListNode } from '@stoplight/tree-list';
import { Omit } from '@stoplight/types';
import { Checkbox } from '@stoplight/ui-kit';
import * as pluralize from 'pluralize';
import * as React from 'react';

import { IMasking, SchemaNodeWithMeta } from '../types';
import { formatRef, isCombiner, isRef, pathToString } from '../utils';
import { Divider, Types } from './';

export interface ISchemaRow extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onSelect'>, IMasking {
  node: ITreeListNode<object>;
  onMaskEdit(node: SchemaNodeWithMeta): void;
}

export const SchemaRow: React.FunctionComponent<ISchemaRow> = ({ node, canSelect, onSelect, onMaskEdit, selected }) => {
  const schemaNode = node.metadata as SchemaNodeWithMeta;
  const { showDivider, name, $ref, subtype, required, path, inheritedFrom } = schemaNode;

  const handleChange = React.useCallback(
    () => {
      if (onSelect !== undefined) {
        onSelect(pathToString(path));
      }
    },
    [onSelect]
  );

  const handleEditMask = React.useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    e => {
      e.stopPropagation();
      console.log('click');
      onMaskEdit(schemaNode);
    },
    [onMaskEdit]
  );

  const type = isRef(schemaNode) ? '$ref' : isCombiner(schemaNode) ? schemaNode.combiner : schemaNode.type;
  const description = 'annotations' in schemaNode && schemaNode.annotations.description;

  const validationCount = 'validations' in schemaNode && Object.keys(schemaNode.validations).length;

  return (
    <div className="flex flex-1 items-center text-sm leading-snug relative select-none mr-3">
      {showDivider && <Divider>or</Divider>}

      <div className="flex-1 truncate">
        <div className="flex items-baseline">
          {name && <span className="mr-5">{name}</span>}

          <Types type={type} subtype={subtype}>
            {type === '$ref' ? `[${$ref}]` : null}
          </Types>

          {inheritedFrom ? (
            <>
              <span className="text-darken-7 mx-2">{`{${formatRef(inheritedFrom)}}`}</span>
              {onMaskEdit !== undefined && <span onClick={handleEditMask}>(edit mask)</span>}
            </>
          ) : null}
        </div>

        {description && <span className="text-darken-7">{description}</span>}
      </div>

      {(canSelect || validationCount || required) && (
        <div className="items-center text-right ml-auto">
          {canSelect ? (
            <Checkbox onChange={handleChange} checked={selected && selected.includes(pathToString(path))} />
          ) : (
            <>
              {validationCount ? (
                <span className="mr-3">
                  {validationCount} {pluralize('validation', validationCount)}
                </span>
              ) : null}

              {required && <span className="font-bold">required</span>}
            </>
          )}
        </div>
      )}
    </div>
  );
};
