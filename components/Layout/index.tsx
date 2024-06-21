import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import React from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
export default withPageAuthRequired(Layout)
