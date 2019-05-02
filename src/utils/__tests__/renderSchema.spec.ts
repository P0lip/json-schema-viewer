import { renderSchema } from '../renderSchema';

import { JSONSchema4 } from 'json-schema';
import { schema as defaultSchema } from '../../__fixtures__/default-schema';
import { schemaWithRefs } from '../../__fixtures__/ref/original';
import { dereferencedSchema } from '../../__fixtures__/ref/resolved';
// import { stressSchema } from '../../__fixtures__/stress-schema';

jest.mock('../assignId', () => ({
  assignId: jest.fn(() => 'random-id'),
}));

describe('renderSchema util', () => {
  it.each([[defaultSchema, undefined], [schemaWithRefs, dereferencedSchema]])(
    'should match %s',
    (schema, dereferenced) => {
      expect(renderSchema(schema as JSONSchema4, dereferenced)).toMatchSnapshot();
    }
  );
});
