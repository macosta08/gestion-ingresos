// import 'reflect-metadata';
// import 'ts-tiny-invariant';
import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { getSession } from 'next-auth/react';
import { types } from '@/graphql/models/types';
import { GQLEnums } from '@/graphql/models/enums';
import { resolvers } from '@/graphql/models/resolvers';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { ServerResponse, IncomingMessage } from 'http';

const cors = Cors({
  allowMethods: ['POST', 'OPTIONS', 'GET', 'HEAD'],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(async (req: MicroRequest, res: ServerResponse<IncomingMessage>) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  const session = await getSession({ req });
  console.log('session :>> ', session);
  // if (process.env.NODE_ENV === 'production' && !session) {
  //   return res.status(401).send({ error: 'unauthorized' });
  // }

  const apolloServer = new ApolloServer({
    context: () => ({ session }),
    typeDefs: [...types, GQLEnums],
    resolvers: [...resolvers],
    introspection: true,
  });

  await apolloServer.start();

  return apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});

