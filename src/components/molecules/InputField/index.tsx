import React from 'react';
import { FieldProps } from 'formik';
import { Input, Form } from 'antd';
import styled from 'styled-components';

interface InputFieldProps extends FieldProps {
  label?: string;
  required?: boolean;
  submitCount: number;
  placeholder?: string;
  prefix?: string | React.ReactNode;
  type?: string;
}

const InputField = (props: InputFieldProps) => {
  const {
    label,
    form,
    field,
    submitCount,
    required,
    placeholder,
    prefix,
    type,
  } = props;

  const { touched, errors }: any = form;

  const isTouched = touched[field.name];
  const submitted = submitCount > 0;
  const hasError = errors[field.name];
  const submittedError = hasError && submitted;
  const touchedError = hasError && isTouched;

  return (
    <Styled>
      <Form.Item
        label={label}
        help={submittedError || touchedError ? hasError : false}
        validateStatus={(submittedError || touchedError) && 'error'}
        required={required}
        colon={false}
      >
        <Input
          {...field}
          placeholder={placeholder}
          prefix={prefix}
          type={type}
        />
      </Form.Item>
    </Styled>
  );
};

export default InputField;

const Styled = styled.div`
  .ant-form-item-label {
    text-align: left;
  }
  .ant-form-item-with-help {
    margin-bottom: 12px;
  }
`;
