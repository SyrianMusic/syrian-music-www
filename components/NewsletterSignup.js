import { useState } from 'react';
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

const newsletterSignupSchema = Yup.object().shape({
  email: Yup.string().email(errorMessages.invalidEmail).required(errorMessages.invalidEmail),
});

const NewsletterSignup = ({ className }) => {
  const [touched, setTouched] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const isValid = ({ onSuccess, onError } = {}) => {
    try {
      newsletterSignupSchema.validateSync({ email });
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
      validate();
    }
  };

  const onChange = (e) => {
    setEmail(e.target.value);

    if (touched) {
      validate();
    }
  };

  return (
    <form
      className={className}
      action="https://syrianmusic.us1.list-manage.com/subscribe/post?u=8b74a47300fb2a26103dd07aa&amp;id=66a839666b"
      method="POST"
      target="_blank"
      noValidate>
      <Typography className="component-NewsletterSignup-title" textAlign="center" variant="h3">
        Stay up to date
      </Typography>

      <Input
        className="component-NewsletterSignup-input"
        label="Enter your email"
        name="EMAIL"
        type="email"
        onBlur={onBlur}
        onChange={onChange}
        value={email}
        error={error}
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
        disabled={!isValid()}
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
