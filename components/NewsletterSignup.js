import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import * as mixins from '../styles/mixins';
import theme from '../styles/theme';
import Button from './Button';
import Input from './Input';
import Typography from './Typography';

const MESSAGES = {
  success:
    'Thank you for signing up! Please follow the instructions in the next window to complete your registration.',
  error: {
    invalidEmail: 'Please provide a valid email address.',
  },
};

const NEWSLETTER_SIGNUP_SCHEMA = Yup.object().shape({
  email: Yup.string().email(MESSAGES.error.invalidEmail).required(MESSAGES.error.invalidEmail),
});

const INITIAL_STATE = {
  email: '',
  error: null,
  handleSubmit: null,
  submitted: false,
  touched: false,
};

const NewsletterSignup = ({ className }) => {
  const [email, setEmail] = useState(INITIAL_STATE.email);
  const [error, setError] = useState(INITIAL_STATE.error);
  const [submitted, setSubmitted] = useState(INITIAL_STATE.submitted);
  const [touched, setTouched] = useState(INITIAL_STATE.touched);

  const isValid = ({ onSuccess, onError } = {}) => {
    try {
      NEWSLETTER_SIGNUP_SCHEMA.validateSync({ email });
      if (typeof onSuccess === 'function') {
        onSuccess();
      }
      return true;
    } catch (err) {
      if (typeof onError === 'function') {
        onError(err);
      }
      return false;
    }
  };

  const validate = () => {
    isValid({
      onSuccess: () => {
        setError(null);
      },
      onError: (err) => {
        setError(err.message);
      },
    });
  };

  const onBlur = () => {
    if (!touched) {
      setTouched(true);
    }
  };

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (touched) {
      validate();
    }
  }, [email, touched]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.submit();
  };

  const resetForm = () => {
    setEmail(INITIAL_STATE.email);
    setError(INITIAL_STATE.error);
    setSubmitted(INITIAL_STATE.submitted);
    setTouched(INITIAL_STATE.touched);
  };

  let successMessage;

  if (submitted) {
    successMessage = (
      <>
        {MESSAGES.success}
        <Button className="component-NewsletterSignup-resubmit" onClick={resetForm}>
          Sign up another email address.
        </Button>
      </>
    );
  }

  return (
    <form
      className={className}
      action="https://syrianmusic.us1.list-manage.com/subscribe/post?u=8b74a47300fb2a26103dd07aa&amp;id=66a839666b"
      method="POST"
      target="_blank"
      onSubmit={onSubmit}
      noValidate>
      <Typography className="component-NewsletterSignup-title" textAlign="center" variant="h3">
        Stay up to date
      </Typography>

      <Input
        className="component-NewsletterSignup-input"
        label="Enter your email"
        name="EMAIL"
        disabled={submitted}
        error={error}
        onBlur={onBlur}
        onChange={onChange}
        success={successMessage}
        type="email"
        value={email}
        required
      />

      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input type="text" name="SIGNUPCOMP" tabIndex="-1" value="Footer" readOnly />
        <input
          type="text"
          name="SIGNUPURL"
          tabIndex="-1"
          value={typeof window !== 'undefined' ? window.location.href : ''}
          readOnly
        />
      </div>

      <Button
        className="component-NewsletterSignup-submit"
        type="submit"
        color={Button.colors.white}
        disabled={!isValid() || submitted}
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

        form :global(.component-NewsletterSignup-resubmit) {
          font: inherit;
          color: ${theme.color.white};
          text-decoration: underline;
        }

        form :global(.component-NewsletterSignup-resubmit):focus,
        form :global(.component-NewsletterSignup-resubmit):hover {
          color: ${theme.color.white};
          text-decoration-color: ${theme.color.white};
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
