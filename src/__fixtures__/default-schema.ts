import { JSONSchema4 } from 'json-schema';

export const schema: JSONSchema4 = {
  title: 'User',
  type: 'object',
  description: 'some descriptions',
  properties: {
    name: {
      type: 'string',
      description: "# The user's full name.",
    },
    age: {
      type: 'number',
      minimum: 0,
      maximum: 150,
    },
    completed_at: {
      type: 'string',
      format: 'date-time',
    },
    items: {
      type: ['null', 'array'],
      items: {
        type: ['string', 'number'],
      },
    },
    email: {
      type: 'string',
      format: 'email',
      minLength: 2,
    },
    plan: {
      anyOf: [
        {
          type: 'object',
          properties: {
            foo: {
              type: 'string',
            },
            bar: {
              type: 'string',
            },
          },
          required: ['foo', 'bar'],
        },
        {
          type: 'array',
          items: {
            type: 'integer',
          },
        },
      ],
    },
    permissions: {
      type: ['string', 'object'],
      properties: {
        ids: {
          type: 'array',
          items: {
            type: 'integer',
          },
        },
      },
    },
    ref: {
      $ref: '#/definitions/error-response',
    },
  },
  minItems: 1,
  minProperties: 20,
  pattern: '^a',
  patternProperties: {
    '^id_': {
      type: 'number',
    },
    foo: {
      type: 'integer',
    },
    _name$: {
      type: 'string',
    },
  },
  required: ['name', 'age', 'completed_at'],
};
