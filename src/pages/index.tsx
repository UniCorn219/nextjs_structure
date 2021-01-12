// ホーム（トップ）

import React from 'react';
import { NextPage } from 'next';

import { NextPageContext } from 'src/interfaces/next';
import LayoutMain from 'src/containers/organisms/Layout/Main';
import { Home } from 'src/components/pages';

type InitialProps = {
  errorCode?: number;
};

const Page: NextPage<{}, InitialProps> = () => {
  return (
    <LayoutMain>
      <Home />
    </LayoutMain>
  );
};

Page.getInitialProps = async (ctx: NextPageContext) => {
  return {};
};

export default Page;
