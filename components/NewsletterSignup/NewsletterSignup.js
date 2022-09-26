import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import * as mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import Button from '../Button';
import Input, { inputBorderWidth, inputPadding } from '../Input';
import Typography from '../Typography';
import UnstyledButton from '../UnstyledButton';

const MESSAGES = {
  input: 'Enter your email',
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

export const NewsletterSignup = ({ className, onSubmit }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (typeof onSubmit === 'function') {
      onSubmit(e);
    } else {
      e.target.submit();
    }
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
        <UnstyledButton className="component-NewsletterSignup-resubmit" onClick={resetForm}>
          Sign up another email address.
        </UnstyledButton>
      </>
    );
  }

  return (
    <form
      className={className}
      action="https://syrianmusic.us1.list-manage.com/subscribe/post?u=8b74a47300fb2a26103dd07aa&amp;id=66a839666b"
      method="POST"
      target="_blank"
      onSubmit={handleSubmit}
      noValidate>
      <div className="component-NewsletterSignup-content">
        <Typography className="component-NewsletterSignup-title" textAlign="center" variant="h3">
          Stay up to date
        </Typography>

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

        <div className="component-NewsletterSignup-input-wrapper">
          <Input
            className="component-NewsletterSignup-input"
            label={MESSAGES.input}
            name="EMAIL"
            disabled={submitted}
            error={error}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={MESSAGES.input}
            success={successMessage}
            type="email"
            value={email}
            required
          />

          <Button
            className="component-NewsletterSignup-submit"
            type="submit"
            color={Button.colors.primary}
            disabled={!isValid() || submitted}
            variant={Button.variants.filled}>
            Sign up
          </Button>
        </div>
      </div>

      <style jsx>{`
        form {
          background-color: ${theme.color.linen};
        }

        .component-NewsletterSignup-content {
          background: image-set(
              url('/images/instruments/syrian-oud-sound-hole-closeup.png') 1x,
              url('/images/instruments/syrian-oud-sound-hole-closeup@2x.png') 2x,
              url('/images/instruments/syrian-oud-sound-hole-closeup@3x.png') 3x
            )
            center center no-repeat;
          background-size: cover;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: ${theme.pxToRem(302)};
          padding: 0 ${theme.pxToRem(40)};
        }

        form :global(.component-NewsletterSignup-title) {
          margin-bottom: ${theme.pxToRem(28)};
        }

        .component-NewsletterSignup-input-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        form :global(.component-NewsletterSignup-input) {
          width: 100%;
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

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          .component-NewsletterSignup-content {
            background-image: image-set(
              url('/images/instruments/syrian-oud-sound-hole.png') 1x,
              url('/images/instruments/syrian-oud-sound-hole@2x.png') 2x,
              url('/images/instruments/syrian-oud-sound-hole@3x.png') 3x
            );
            max-width: ${theme.pxToRem(1440)};
            margin: 0 auto;
            padding: ${theme.pxToRem(103)} 0 ${theme.pxToRem(129)};
          }

          form :global(.component-NewsletterSignup-title) {
            margin-bottom: ${theme.pxToRem(48)};
          }

          .component-NewsletterSignup-input-wrapper {
            flex-direction: row;
            align-items: flex-start;
            width: ${(689 / theme.layout.contentWidthMax) * 100}%;
            max-width: ${theme.pxToRem(689)};
          }

          form :global(.component-NewsletterSignup-input) {
            flex: 1;
          }

          form :global(.component-NewsletterSignup-submit) {
            ${mixins.typography.lg.desktop};
            margin-top: ${theme.pxToRem(8)};
            height: ${theme.pxToRem(
              inputPadding.top +
                theme.typography.body.lg.lineHeightDesktop +
                inputPadding.bottom +
                inputBorderWidth * 2,
            )};
            width: ${theme.pxToRem(150)};
          }
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
  onSubmit: PropTypes.func,
};

NewsletterSignup.defaultProps = {
  className: undefined,
  onSubmit: undefined,
};
