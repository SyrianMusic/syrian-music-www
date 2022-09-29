import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import * as mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import Button from '../Button';
import { EmailInput, inputBorderWidth, inputPadding, useInput } from '../Input';
import Typography from '../Typography';

const MESSAGES = {
  input: 'Enter your email',
  success:
    'Thank you for signing up! Please follow the instructions in the next window to complete your registration.',
};

export const NewsletterSignup = ({ className, onSubmit }) => {
  const emailInput = useInput(null);

  const { isValid: isEmailValid } = emailInput;

  const [isSubmitted, setIsSubmitted] = useState(false);

  const isDisabled = useMemo(() => isSubmitted || !isEmailValid, [isEmailValid, isSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (typeof onSubmit === 'function') {
      onSubmit(e);
    } else {
      e.target.submit();
    }
  };

  let successMessage;

  if (isSubmitted) {
    successMessage = MESSAGES.success;
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
          <EmailInput
            {...emailInput}
            className="component-NewsletterSignup-input"
            name="EMAIL"
            placeholder={MESSAGES.input}
            disabled={isSubmitted}
            required
          />

          <Button className="component-NewsletterSignup-submit" type="submit" disabled={isDisabled}>
            Sign up
          </Button>
        </div>
        <Typography css={{ marginTop: theme.spacing.get(16) }} textAlign="center">
          {successMessage || ' '}
        </Typography>
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
            height: ${theme.pxToRem(
              inputPadding.top +
                theme.typography.body.lg.lineHeightDesktop +
                inputPadding.bottom +
                inputBorderWidth * 2,
            )};
            padding-top: 0;
            padding-bottom: 0;
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
