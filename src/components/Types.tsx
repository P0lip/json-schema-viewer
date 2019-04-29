import { JSONSchema4TypeName } from 'json-schema';
import * as React from 'react';
import { JSONSchema4CombinerName } from '../types';
import { Type } from './Type';

interface ITypes {
  type?: JSONSchema4TypeName | JSONSchema4TypeName[] | JSONSchema4CombinerName | '$ref';
  subtype?: JSONSchema4TypeName | JSONSchema4TypeName[];
}

export const Types: React.FunctionComponent<ITypes> = ({ type, subtype, ...rest }) => {
  if (!type) return null;

  if (!Array.isArray(type)) {
    return <Type type={type} subtype={subtype} {...rest} />;
  }

  return (
    <div>
      {type.map((name, i, { length }) => (
        <>
          <Type type={name} subtype={subtype} />
          {i < length - 1 && (
            <span key={`${i}-sep`} className="text-darken-7">
              {' or '}
            </span>
          )}
        </>
      ))}
    </div>
  );
};
