import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import * as mixins from '../styles/mixins';
import theme from '../styles/theme';
import Button from './Button';
import Input from './Input';
import Typography from './Typography';

const errorMessages = {
  invalidEmail: 'Please provide a valid email address.',
};

const NewsletterSignupSchema = Yup.object().shape({
  email: Yup.string().email(errorMessages.invalidEmail).required(errorMessages.invalidEmail),
});

const initialValues = {
  email: '',
};

const NewsletterSignup = ({ className }) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValid,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: NewsletterSignupSchema,
    onSubmit: async (values) => {
      console.log({ values });
      resetForm();
    },
  });

  let error;

  if (errors.email && touched.email && errors.email) {
    error = errors.email;
  }

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      <Typography className="component-NewsletterSignup-title" textAlign="center" variant="h3">
        Stay up to date
      </Typography>

      <Input
        className="component-NewsletterSignup-input"
        error={error}
        label="Enter your email"
        name="email"
        onBlur={handleBlur}
        onChange={handleChange}
        required
        type="email"
        value={values.email}
      />

      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input
          type="text"
          name="b_8b74a47300fb2a26103dd07aa_66a839666b"
          tabIndex="-1"
          value=""
          readOnly
        />
      </div>

      <Button
        className="component-NewsletterSignup-submit"
        disabled={!isValid || values === initialValues || isSubmitting}
        type="submit"
        color={Button.colors.white}
        variant={Button.variants.outlined}>
        Sign up
      </Button>

      <style jsx>{`
        form {
          background-color: ${theme.color.salmon};
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: ${theme.pxToRem(18)};
          padding-bottom: ${theme.pxToRem(24)};
        }

        form :global(.component-NewsletterSignup-title) {
          color: ${theme.color.white};
          margin-bottom: ${theme.pxToRem(8)};
          width: 100%;
        }

        form :global(.component-NewsletterSignup-input) {
          width: 80%;
          max-width: ${theme.pxToRem(360)};
        }

        form :global(.component-NewsletterSignup-submit) {
          margin-top: ${theme.pxToRem(4)};
        }

        @media screen and (min-width: ${theme.layout.contentWidthMax}px) {
          form {
            ${mixins.layout.fullWidth}
          }
        }
      `}</style>
    </form>
  );
};

NewsletterSignup.propTypes = {
  className: PropTypes.string,
};

NewsletterSignup.defaultProps = {
  className: undefined,
};

export default NewsletterSignup;
