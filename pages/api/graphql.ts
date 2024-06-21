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
