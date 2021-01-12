import { parseCookies, setCookie, destroyCookie } from 'nookies';

import redirect from 'src/utils/redirect';
import { Action } from 'src/reducers';
import { Payload } from 'src/components/organisms/Form/Login/condition';
import { ADMIN_AUTH_TOKEN } from 'src/constants/cookie';
import authActions from 'src/reducers/app/auth';
import authRepository from 'src/repositories/auth';
import { NextPageContext } from 'src/interfaces/next';
import { LOGIN_PATH } from 'src/constants/app';
import notificationActions from 'src/reducers/ui/notification';


interface PostLogin {
  payload: Payload;
}

export const postLogin = ({ payload }: PostLogin): Action => {
  return async (dispatch) => {
    const { data, meta } = payload;
    const { setSubmitting, setStatus, resetForm } = meta.actions;
    try {
      const res = await authRepository.post({ dispatch, payload: data });
      const { auth_token } = res.data.meta;
      const authUser = res.data.data;
      delete authUser.relationships;
      dispatch(authActions.update(authUser));
      setCookie(null, ADMIN_AUTH_TOKEN, auth_token, {});
      setStatus({ hasError: false });
      setSubmitting(false);
      redirect({ location: '/' });
    } catch (err) {
      resetForm({ values: { ...data } });
      setStatus({ hasError: true });
      setSubmitting(false);
    }
  };
};

interface Authorization {
  ctx: NextPageContext;
}

const DESCRIPTION = 'ログイン有効期限が切れました、再度ログインしてください';

export const authorization = ({ ctx }: Authorization): Action => {
  return async (dispatch) => {
    try {
      if (!parseCookies(ctx)[ADMIN_AUTH_TOKEN]) {
        if (ctx.pathname !== LOGIN_PATH) {
          redirect({ location: LOGIN_PATH, ctx });
          dispatch(
            notificationActions.onNotification({
              type: 'error',
              message: '401',
              description: DESCRIPTION,
            })
          );
        }
        return Promise.resolve(false);
      }

      ctx.pathname === LOGIN_PATH && redirect({ location: '/', ctx });
      return Promise.resolve(true);
    } catch (err) {
      destroyCookie(ctx, ADMIN_AUTH_TOKEN);
      ctx.pathname !== LOGIN_PATH && redirect({ location: '/login', ctx });
      return Promise.resolve(false);
    }
  };
};
