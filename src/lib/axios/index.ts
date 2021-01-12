import axiosBase, { AxiosRequestConfig } from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { parseCookies } from 'nookies';

import { ADMIN_AUTH_TOKEN } from 'src/constants/cookie';
import ENV from 'src/constants/env';
import { NextPageContext } from 'src/interfaces/next';
import setInterceptor from './interceptor';

interface Axios {
  ctx?: NextPageContext;
  dispatch: Dispatch;
  request: AxiosRequestConfig & {
    data?: { data: { [x: string]: any } } | FormData;
  };
  newAuthToken?: string;
}

export default ({ ctx, dispatch, request, newAuthToken }: Axios) => {
  const authToken = newAuthToken || parseCookies(ctx)[ADMIN_AUTH_TOKEN];
  const axios = axiosBase.create({
    baseURL: ENV.API_HOST,
    headers: {
      Authorization: authToken ? `Bearer ${authToken}` : null,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  });

  setInterceptor({ axios, ctx, dispatch, request });

  return axios(request);
};
