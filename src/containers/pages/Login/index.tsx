import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { postLogin } from 'src/usecase/auth';

import Login from 'src/components/pages/Login';

const ContainerComponent = () => {
  const dispatch = useDispatch();
  const handleSubmitLoginForm = useCallback(
    (val) => dispatch(postLogin({ payload: val })),
    [dispatch]
  );

  const containerProps = {
    handleSubmitLoginForm,
  };

  return <Login {...containerProps} />;
};

export default ContainerComponent;
