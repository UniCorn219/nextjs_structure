import React from 'react';
import { NextPage } from 'next';

import { Error } from 'src/components/pages';

type Props = {
  statusCode: number | null;
};

const CustomError: NextPage<Props> = (props) => <Error.Routing {...props} />;

CustomError.getInitialProps = ({ res }) => {
  return { statusCode: res ? res.statusCode : null };
};

export default CustomError;
