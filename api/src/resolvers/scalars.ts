import { GraphQLScalarType, Kind } from 'graphql'

export const DateTime = new GraphQLScalarType({
    name: 'Date',
    description: 'Custom scalar type for Date',
    serialize(value: unknown): string {
      if (!(value instanceof Date)) {
        throw new Error('Expected a Date object');
      }
      return value.toISOString(); // Convert outgoing Date to ISOString for JSON
    },
    parseValue(value: unknown): Date {
      if (typeof value !== 'string' && typeof value !== 'number') {
        throw new Error('Expected a string or number');
      }
      return new Date(value); // Convert incoming integer or string to Date
    },
    parseLiteral(ast): Date {
      if (ast.kind !== Kind.STRING && ast.kind !== Kind.INT) {
        throw new Error('Expected a string or integer');
      }
      return new Date(ast.value); // Convert hard-coded AST string or integer to Date
    }
  });
  