import { useField } from 'formik';
import Input from './Input';

const EmailInput = (props) => <Input {...props} type="email" />;

export default EmailInput;

export const FormikEmailInput = (props) => {
  const [field, meta] = useField({ ...props, type: 'email' });

  let error;

  if (meta.touched && meta.error) {
    error = meta.error;
  }

  return <EmailInput {...field} {...props} error={error} />;
};
