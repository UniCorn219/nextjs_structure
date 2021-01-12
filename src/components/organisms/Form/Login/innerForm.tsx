import React from 'react';
import { FormikProps, Field } from 'formik';
import { Button, Form as AntdForm, Alert } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { InputField } from 'src/components/molecules';
import { OutterProps, FormValues } from './condition';

type InnerFormProps = OutterProps & FormikProps<FormValues>;

const InnerForm = (props: InnerFormProps) => {
  const { isSubmitting, submitCount, isValid, status, submitForm } = props;

  const hasError = status && status.hasError;
  const isFirebase = status && status.isFirebase;

  return (
    <AntdForm>
      <Field
        name="email"
        component={InputField}
        submitCount={submitCount}
        placeholder="メールアドレス"
        prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
      />
      <Field
        name="password"
        component={InputField}
        type="password"
        submitCount={submitCount}
        placeholder="パスワード"
        prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
      />
      {hasError && (
        <Alert
          message={
            isFirebase
              ? 'エラーが発生しました。'
              : 'メールアドレスかパスワードが間違っています'
          }
          type="error"
          style={{ marginBottom: '2rem' }}
        />
      )}
      <ButtonWrapper>
        <Button
          htmlType="submit"
          type="primary"
          loading={isSubmitting}
          disabled={!isValid}
          size="large"
          onClick={() => submitForm()}
        >
          ログイン
        </Button>
      </ButtonWrapper>
    </AntdForm>
  );
};

export default InnerForm;

const ButtonWrapper = styled.div`
  width: 100%;
  margin: 1rem auto 0;

  > button {
    width: 100%;
  }
`;
