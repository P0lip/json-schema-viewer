import { TreeList, TreeListEvents, TreeStore } from '@stoplight/tree-list';
import { Omit } from '@stoplight/types';
import * as cn from 'classnames';
import { JSONSchema4 } from 'json-schema';
import _isEmpty = require('lodash/isEmpty');
import * as React from 'react';

import { useMetadata } from '../hooks';
import { IMasking } from '../types';
import { lookupRef } from '../utils';
import { ISchemaRow, MaskedSchema, SchemaRow, TopBar } from './';

const canDrag = () => false;

export interface ISchemaTree extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>, IMasking {
  name?: string;
  dereferencedSchema?: JSONSchema4;
  schema: JSONSchema4;
  expanded?: boolean;
  hideTopBar?: boolean;
  treeStore: TreeStore;
}

export const SchemaTree: React.FunctionComponent<ISchemaTree> = props => {
  const {
    expanded = false,
    schema,
    dereferencedSchema,
    hideTopBar,
    selected,
    canSelect,
    onSelect,
    name,
    treeStore,
    className,
    ...rest
  } = props;

  const [maskedSchema, setMaskedSchema] = React.useState<JSONSchema4 | null>(null);

  const metadata = useMetadata(schema);

  const handleMaskEdit = React.useCallback<ISchemaRow['onMaskEdit']>(
    node => {
      setMaskedSchema(lookupRef(node.path, dereferencedSchema));
    },
    [dereferencedSchema]
  );

  treeStore.on(TreeListEvents.NodeClick, (e, node) => {
    treeStore.toggleExpand(node);
  });

  const handleMaskedSchemaClose = React.useCallback(() => {
    setMaskedSchema(null);
  }, []);

  const shouldRenderTopBar = !hideTopBar && (name || !_isEmpty(metadata));

  const itemData = {
    onSelect,
    onMaskEdit: handleMaskEdit,
    selected,
    canSelect,
  };

  return (
    <div className={cn(className, 'h-full w-full')} {...rest}>
      {maskedSchema && (
        <MaskedSchema onClose={handleMaskedSchemaClose} onSelect={onSelect} selected={selected} schema={maskedSchema} />
      )}
      {shouldRenderTopBar && <TopBar name={name} metadata={metadata} />}
      <TreeList
        rowHeight={40}
        canDrag={canDrag}
        store={treeStore}
        striped={true}
        rowRenderer={node => <SchemaRow node={node} {...itemData} />}
      />
    </div>
  );
};
