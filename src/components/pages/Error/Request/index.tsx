import React from 'react';
import Router from 'next/router';
import { Button, Typography } from 'antd';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import breakpoint from 'src/constants/breakpoints';

const RequestError = () => {
  return (
    <Wrapper>
      <Typography.Title
        level={1}
        style={{ marginBottom: '6rem', letterSpacing: '0.1em' }}
      >
        Accounting
      </Typography.Title>
      <Contents>読み込みに失敗しました</Contents>
      <ButtonWrapper>
        <Button onClick={() => Router.replace(window.document.URL)}>
          <FontAwesomeIcon icon={['fas', 'redo-alt']} />
          <ReloadText>再読込み</ReloadText>
        </Button>
        <Button type="primary" onClick={() => Router.push('/')}>
          トップへ戻る
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default RequestError;

const Wrapper = styled.div`
  height: 100vh;
  text-align: center;
  padding: 80px;

  @media screen and (max-width: ${breakpoint.sm}) {
    padding: 80px 1rem 0;
  }
`;

const Contents = styled.div`
  margin: 40px 0 20px;

  @media screen and (max-width: ${breakpoint.sm}) {
    margin: 20px 0;
  }
`;

const ButtonWrapper = styled.div`
  margin: 50px 0;

  > button {
    margin: 0 auto;
    display: block;
    margin-bottom: 50px;
  }
`;

const ReloadText = styled.span`
  padding-left: 0.5rem;
`;
