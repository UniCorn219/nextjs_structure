import { withFormik } from 'formik';

import InnerForm from './innerForm';
import { FormValues, OutterProps, validate } from './condition';

export default withFormik<OutterProps, FormValues>({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validationSchema: validate,
  validateOnMount: true,
  handleSubmit: (values, actions) => {
    const { handleSubmitForm } = actions.props;
    handleSubmitForm({ data: { ...values }, meta: { actions } });
  },
})(InnerForm);
