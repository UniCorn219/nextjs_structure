import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

import breakpoint from 'src/constants/breakpoints';

import { Form } from 'src/components/organisms';

interface LoginProps {
  handleSubmitLoginForm: (value: any) => void;
}

const Login = (props: LoginProps) => {
  const { handleSubmitLoginForm } = props;
  return (
    <Wrapper>
      <LoginFormWrapper>
        <Typography.Title
          level={1}
          style={{ marginBottom: '6rem', letterSpacing: '0.1em' }}
        >
          ACCOUNTING
        </Typography.Title>
        <Form.Login handleSubmitForm={handleSubmitLoginForm} />
      </LoginFormWrapper>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
`;
const LoginFormWrapper = styled.div`
  padding-top: 10%;
  margin: 0 auto;
  width: 400px;

  @media screen and (max-width: ${breakpoint.sm}) {
    width: 80%;
    padding-top: 4rem;
    margin: 0 auto;
  }
`;
