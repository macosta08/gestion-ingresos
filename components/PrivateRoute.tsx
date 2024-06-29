import { useSession, signIn } from 'next-auth/react';
import Layout from './Layout';
import { Loading } from './AtomicDesign/Atoms/Loading';

function PrivateRoute({ children, rejected, isPublic }:any) {
  const { data: session, status } = useSession();
  if (status === 'loading') return <Loading open />;
  // if (isPublic) return <LayoutPublic>{children}</LayoutPublic>;

  if (!session) {
    signIn('auth0');
    return <Loading open />;
  }
  if (isPublic) return children;
  if (!rejected) return <Layout>{children}</Layout>;

  return <div>You are not authorized to view this site.</div>;
}

export default PrivateRoute;
