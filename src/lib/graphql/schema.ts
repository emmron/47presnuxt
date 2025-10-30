import { createSchema } from 'graphql-yoga';
import { JSONResolver } from 'graphql-scalars';
import data from '$lib/data/betfair_full_flat.json';

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    scalar JSON
    type Query {
      raw: JSON!
    }
  `,
  resolvers: {
    JSON: JSONResolver,
    Query: {
      raw: () => data
    }
  }
});
