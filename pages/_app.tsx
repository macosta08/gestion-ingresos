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
// import Head from 'next/head';
// import Router from 'next/router';
// // import NProgress from 'nprogress';
// import { SessionProvider } from 'next-auth/react';
// // import { Provider } from 'jotai/react';
// import { ApolloProvider } from '@apollo/client';

// import type { AppProps } from 'next/app';
// import '@/styles/globals.scss';
// import 'react-toastify/dist/ReactToastify.css';
// import 'nprogress/nprogress.css';
// import { useApolloClient } from '@/hooks/useApolloClient ';
// import { PrivateLayout } from '@/layouts/PrivateLayout ';

// /**
//  * Componente principal de la aplicación. Configura la sesión, el tema y la localización,
//  * y envuelve la aplicación con los proveedores necesarios.
//  * @param Component - Componente de la página actual.
//  * @param pageProps - Props de la página actual.
//  */
// const MyApp = ({
//   Component,
//   pageProps: { session, ...pageProps },
//   ...props
// }: AppProps) => (
//   <SessionProvider session={session} refetchOnWindowFocus={false}>
//     {/* <Head>
//       <title>{${pageProps?.page?.name ?? 'Sistema de cargas'} | Virtual cargo}</title>
//     </Head> */}
//     <App Component={Component} pageProps={pageProps} {...props} />
//   </SessionProvider>
// );

// /**
//  * Componente que envuelve la aplicación con ApolloProvider, Provider y ThemeProvider,
//  * y configura la localización con LocalizationProvider.
//  * @param Component - Componente de la página actual.
//  * @param pageProps - Props de la página actual.
//  */
// const App = ({ Component, pageProps }: AppProps) => {
//   const { client } = useApolloClient();

//   return (
//     <ApolloProvider client={client}>
//       {/* <Provider> */}
//             <PrivateLayout
//               rejected={pageProps?.rejected ?? false}
//               // isPublic={pageProps?.isPublic ?? false}
//             >
//               <Component {...pageProps} />
//             </PrivateLayout>
         

//       {/* </Provider> */}
//     </ApolloProvider>
//   );
// };

// export default MyApp;
