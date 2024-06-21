import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Layout from "@/components/Layout";
import {
  TooltipProvider,
} from "@/components/ui/tooltip"

// // Configuración de Apollo Client
// const client = new ApolloClient({
//   uri: 'URL_DEL_SERVIDOR_GRAPHQL',
//   cache: new InMemoryCache(),
// });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ApolloProvider client={client}>
     <UserProvider><TooltipProvider> <Layout><Component {...pageProps} /></Layout></TooltipProvider> </UserProvider>
    // </ApolloProvider>
  );
}

export default MyApp;
