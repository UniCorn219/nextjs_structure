import { Dispatch } from 'src/reducers';
import { NextPageContext } from 'src/interfaces/next';

export default interface Repository {
  dispatch: Dispatch;
  ctx?: NextPageContext;
  include?: string;
  page?: number;
  per?: number;
}
