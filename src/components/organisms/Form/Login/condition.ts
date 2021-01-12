import { FormikBag } from 'formik';
import * as Yup from 'yup';

export interface FormValues {
  email: string;
  password: string;
}

export interface OutterProps {
  handleSubmitForm: (payload: Payload) => void;
}

export interface Payload {
  data: {
    email: string;
    password: string;
  };
  meta: {
    actions: FormikBag<OutterProps, FormValues>;
  };
}

export const validate = Yup.object().shape({
  email: Yup.string()
    .email('不正な形式です')
    .required('必須項目です'),
  password: Yup.string().required('必須項目です'),
});
