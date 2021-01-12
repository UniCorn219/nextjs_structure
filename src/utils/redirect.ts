import Router from 'next/router';
import { NextPageContext } from 'next';

interface Redirect {
  location: string;
  ctx?: NextPageContext;
}

const redirect = ({ location, ctx }: Redirect) => {
  if (typeof window !== 'undefined') {
    // CSR
    Router.push(location);
  } else if (ctx && ctx.res) {
    // SSR
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  }
};

export default redirect;
