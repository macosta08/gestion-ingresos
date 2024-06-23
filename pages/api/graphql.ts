<<<<<<< HEAD
// pages/api/graphql.ts

import { ApolloServer, gql } from 'apollo-server-micro';

// Define tu esquema GraphQL utilizando SDL (Schema Definition Language)
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Resolutores para el esquema GraphQL
const resolvers = {
  Query: {
    hello: () => 'Hola, mundo!',
  },
};

// Configuración del servidor Apollo
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// Middleware para manejar las solicitudes GraphQL
export const config = {
  api: {
    bodyParser: false,
  },
};

// Exporta el manejador de Apollo Server
export default apolloServer.createHandler({ path: '/api/graphql' });
=======
import { createYoga } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'
import { schema } from '../../graphql/schema'
import { createContext } from '../../graphql/context'

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema,
  context: createContext,
  graphqlEndpoint: '/api/graphql'
})

export const config = {
  api: {
    bodyParser: false
  }
}
>>>>>>> main-funcionalidad-con-estilos
