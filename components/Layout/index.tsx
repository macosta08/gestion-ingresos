import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import Head from 'next/head';
import React from "react";
import Sidebar from '../AtomicDesign/Organisms/Sidebar';
import Header from '../AtomicDesign/Organisms/Header';
// import Header from "./Header";

interface Props {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    // <div>
    //   <Header />
    //   {children}
    // </div>
    <>
    <Head>
      <title>Gestión de ingresos</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
    <Sidebar/>
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
    <Header/> {children}
    </div> </div></>
  );
};
export default withPageAuthRequired(Layout)
