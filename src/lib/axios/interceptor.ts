import { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { Dispatch } from 'src/reducers';
import { NextPageContext } from 'src/interfaces/next';
// import { refreshAuth } from 'src/usecase/authorization';
import appActions from 'src/reducers/ui/app';

interface Interceptor {
  axios: AxiosInstance;
  ctx?: NextPageContext;
  dispatch: Dispatch;
  request: AxiosRequestConfig & {
    data?: { data: { [x: string]: any } };
  };
}

export default ({ axios, ctx, dispatch, request }: Interceptor) => {
  axios.interceptors.response.use(
    (res) => res,
    async (error: AxiosError) => {
      if (!error.response || error.response.status !== 401) {
        if (error.response && error.response.status === 403) {
          dispatch(appActions.setErrorCode(error.response.status));
        }
      }

      return Promise.reject(error);

      // トークンのリフレッシュでも401が発生するため、ループを防ぐためにインターセプタを削除
      // axios.interceptors.response.eject(ownInterceptor);

      // トークンの更新と再リクエストを試みる
      // const refreshCall = dispatch(refreshAuth({ ctx, request }));

      // refreshTokenCallが解決されるまで、他のすべての要求をバインドするインターセプターを作成する
      // const requestQueueInterceptorId = axios.interceptors.request.use(
      //   (request) => refreshCall.then(() => request)
      // );

      // refreshTokenCall解決後の処理
      // try {
      //   const originalResponse = await refreshCall;
      //
      //   axios.interceptors.request.eject(requestQueueInterceptorId);
      //
      //   return Promise.resolve(originalResponse);
      // } catch (error) {
      //   axios.interceptors.request.eject(requestQueueInterceptorId);
      //   return Promise.reject(error);
      // }
    }
  );
  return axios;
};
