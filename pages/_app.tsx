import "@/styles/globals.css";
import { SessionProvider } from 'next-auth/react';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import { NextComponentType, NextPageContext } from 'next';
import PrivateRoute from '@/components/PrivateRoute';
import useApolloClient from '@/hooks/useApolloClient ';
import { Loading } from '@/components/AtomicDesign/Atoms/Loading';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from "@/components/ui/toaster";


function MyApp({ Component, pageProps: { session, page, ...pageProps } }: any) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>{`Gestión de ingresos | ${page?.name}`}</title>
        <link rel='shortcut icon' href='/public/img/logos/logoCirculo.svg' />
        <meta name='title' content='' />
        <meta name='description' content='' />

        <meta property='og:type' content='' />
        <meta property='og:url' content='' />
        <meta property='og:title' content='' />
        <meta property='og:description' content='' />
        <meta property='og:image' content='' />

        <meta property='twitter:card' content='' />
        <meta property='twitter:url' content='' />
        <meta property='twitter:title' content='' />
        <meta property='twitter:description' content='' />
        <meta property='twitter:image' content='' />
      </Head>
      <App Component={Component} pageProps={pageProps} />
    </SessionProvider>
  );
}

function App({
  Component,
  pageProps,
}: {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}) {
  const { client } = useApolloClient();
  if (!client) return <Loading open />;
  return (
    <ApolloProvider client={client}>
       <TooltipProvider> 
      <PrivateRoute
        rejected={pageProps?.rejected ?? false}
        isPublic={pageProps?.isPublic ?? false}
      >
        <Component {...pageProps} />  
        <Toaster />  
      </PrivateRoute>
      </TooltipProvider>
    </ApolloProvider>
  );
}

export default MyApp;