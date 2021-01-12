import React from 'react';
import Router from 'next/router';
import { Button, Typography } from 'antd';
import styled from 'styled-components';

import breakpoint from 'src/constants/breakpoints';

interface RoutingError {
  statusCode: number | null;
}

const RoutingError = (props: any) => {
  const { statusCode } = props;

  const ErrorMessage = ({ statusCode }: { statusCode: number }) => {
    switch (statusCode) {
      case 404:
        return (
          <Contents>
            <h1>{statusCode}</h1>
            <p>お探しのページは見つかりませんでした。</p>
          </Contents>
        );
      case 403:
        return (
          <Contents>
            <h1>{statusCode}</h1>
            <p>ページにアクセスする権限がありません</p>
          </Contents>
        );
      case 500:
        return (
          <Contents>
            <h1>{statusCode}</h1>
            <p>
              エラーが発生しました。
              <br />
              お探しのページが表示できません。
            </p>
          </Contents>
        );
      default:
        return (
          <Contents>
            {statusCode && <h1>{statusCode}</h1>}
            <p>エラーが発生しました。</p>
          </Contents>
        );
    }
  };

  return (
    <Wrapper>
      <Typography.Title
        level={1}
        style={{ marginBottom: '6rem', letterSpacing: '0.1em' }}
      >
        Accounting
      </Typography.Title>
      <ErrorMessage statusCode={statusCode} />
      <ButtonWrapper>
        <Button type="primary" onClick={() => Router.push('/')}>
          トップへ戻る
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default RoutingError;

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
  margin-top: 50px;
`;
