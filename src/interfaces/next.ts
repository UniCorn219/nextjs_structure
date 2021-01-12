import { NextPageContext as NextCtx } from 'next';
import { Store } from 'src/reducers';

export interface NextPageContext<Q extends DefaultQuery = DefaultQuery>
  extends NextCtx {
  query: Q;
  store: Store;
  isServer: boolean;
}

type DefaultQuery = { [key: string]: string | string[] };
