// CAMBIAR
const dominioAuth0 = 'portalagendamientonutresa.us.auth0.com';

const makePost = (
  // eslint-disable-next-line no-undef
  url: RequestInfo | URL,
  body: string,
  options = {} as any
) => {
  const headers = options.headers || {};
  return fetch(url, { body, headers, method: 'POST' }).then((res) => {
    if (res.statusText === 'No Content') {
      return res;
    }
    return res.json();
  });
};

const makeJSONPost = (
  url: string,
  data: {
    client_id?: string;
    client_secret?: string;
    audience?: string;
    grant_type?: string;
    data?: any;
  },
  options = {} as any
) => {
  const body = JSON.stringify(data);
  const headers = options.headers || {};
  headers['Content-Type'] = 'application/json';

  return makePost(url, body, { headers });
};

export const getAuth0Token = () => {
  const url = `https://${dominioAuth0}/oauth/token `;
  const headers = { 'content-type': 'application/json' };
  const body = {
    client_id: 'id30SjCiPNdAOAsYrlDyi8I8sPo1e7fB',
    client_secret:
      'zTi6bGH4oyq_61x1AE38h8nG7rvWKwZ91yJr4Vn1FMbQxe-wHsycPZyUkvwab-px',
    audience: `https://${dominioAuth0}/api/v2/`,
    grant_type: 'client_credentials',
  };
  return makeJSONPost(url, body, headers);
};

export const createUserAuth0 = (data: any, token: any, tokenType: any) => {
  const url = `https://${dominioAuth0}/api/v2/users`;
  const headers = { Authorization: `${tokenType} ${token}` };
  const body = data;
  return makeJSONPost(url, body, { headers });
};

export const createUser = (data: any) => {
  const url = `/api/auth0/users`;
  const headers = {};
  const body = { data };
  return makeJSONPost(url, body, headers);
};

export const postEmail = (data: any) => {
  const url = '/api/sendmail/';
  const headers = '';
  return makeJSONPost(url, data, { headers });
};