import { Dictionary } from '@stoplight/types';
import * as cn from 'classnames';
import { JSONSchema4TypeName } from 'json-schema';
import * as React from 'react';
import { JSONSchema4CombinerName } from '../types';

export interface IType {
  type: JSONSchema4TypeName | JSONSchema4CombinerName | 'binary' | '$ref';
  subtype?: JSONSchema4TypeName | JSONSchema4TypeName[];
  children?: React.ReactNode;
}

export const Type: React.FunctionComponent<IType> = ({ children, type, subtype }) => {
  return (
    <span className={cn(PropertyTypeColors[type])}>
      {type === 'array' && subtype && subtype !== 'array' ? `array[${subtype}]` : type}
      {children}
    </span>
  );
};

export const PropertyTypeColors: Dictionary<string, IType['type']> = {
  object: 'text-blue-6',
  any: 'text-blue-5',
  array: 'text-green-6',
  allOf: 'text-orange-5',
  oneOf: 'text-orange-5',
  anyOf: 'text-orange-5',
  null: 'text-orange-5',
  integer: 'text-red-7',
  number: 'text-red-7',
  boolean: 'text-red-4',
  binary: 'text-green-4',
  string: 'text-green-7',
  $ref: 'text-purple-6',
};
