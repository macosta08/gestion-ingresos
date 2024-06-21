// pages/api/auth/[...auth0].ts
// import { handleAuth } from '@auth0/nextjs-auth0'

// export default handleAuth()

import { handleAuth, handleCallback, Session } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse  } from 'next';

const afterCallback = async (req: NextApiRequest, res: NextApiResponse , session: Session) => {
    const {user} = session;
    if(user){
        // await 
    }
    return session; 
}

export default handleAuth({
    async callback(req: any, res: any) {
        try {
           await handleCallback(req, res, {afterCallback}); 
        } catch (error: any) {
            res.status(error.status || 500).end(error.message)
        }
    }
})
