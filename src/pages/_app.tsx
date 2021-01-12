import React from 'react';
import { Provider, useSelector } from 'react-redux';
import NextApp, { AppContext } from 'next/app';
import withRedux from 'next-redux-wrapper';

import makeStore, { Store } from 'src/reducers';
import GlobalStyle from 'src/style/global';
import 'src/config/fontawesome';
import 'src/lib/nprogress';
import { NextPageContext } from 'src/interfaces/next';
import { authorization } from 'src/usecase/auth';
import appActions from 'src/reducers/ui/app';
import Error from 'src/pages/_error';

interface AppComponentNextPageContext extends AppContext {
  ctx: NextPageContext;
}

interface AppProps {
  Component: React.Component;
  pageProps: any;
  store: Store;
  intl: {
    messages: { [key: string]: string };
    locale: string;
  };
  isAuth: boolean;
  healthCheck?: boolean;
}

class MyApp extends NextApp<AppProps> {
  static async getInitialProps({
                                 Component,
                                 ctx,
                               }: AppComponentNextPageContext) {
    const { store, pathname } = ctx;
    const { dispatch } = store;

    if (pathname === '/healthcheck')
      return { healthCheck: true, pageProps: undefined };

    dispatch(appActions.resetErrorCode());

    const isAuth = await dispatch(authorization({ ctx }));

    const pageProps =
      isAuth && Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

    return {
      pageProps,
      currentPathname: ctx.pathname,
      isAuth,
    };
  }

  render() {
    const { Component, pageProps, store, healthCheck } = this.props;
    if (healthCheck) return <Component/>;

    const ErrorWrapper: React.FC = ({ children }) => {
      const errorCode = useSelector((state) => state.ui.app.errorCode);
      return errorCode ? <Error statusCode={errorCode}/> : <>{children}</>;
    };

    return (
      <Provider store={store}>
        <>
          <ErrorWrapper>
            <Component {...pageProps} />
          </ErrorWrapper>
          <GlobalStyle/>
        </>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
