import React from 'react';
import { destroyCookie } from 'nookies';

import { ADMIN_AUTH_TOKEN } from 'src/constants/cookie';
import { LOGIN_PATH } from 'src/constants/app';
import redirect from 'src/utils/redirect';
import { Layout } from 'src/components/organisms';

interface ContainerComponentProps {
  children: React.ReactNode;
}

const ContainerComponent = (props: ContainerComponentProps) => {

  const handleLogout = () => {
    destroyCookie(null, ADMIN_AUTH_TOKEN);
    redirect({ location: LOGIN_PATH });
  };

  const containerProps = {
    ...props,
    handleLogout,
  };

  return <Layout.Main {...containerProps} />;
};

export default ContainerComponent;
