import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import * as Yup from 'yup';
import * as mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import Button from '../Button';
import { FormikEmailInput, inputBorderWidth, inputPadding } from '../Input';
import Typography from '../Typography';

const INITIAL_VALUES = { EMAIL: '' };

const VALIDATION_SCHEMA = Yup.object({
  EMAIL: Yup.string()
    .email('Please enter a valid email address.')
    .required('Please enter a valid email address.'),
});

const NewsletterSignup = ({ className }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.submit();
    setIsSubmitted(true);
  };

  let successMessage;

  if (isSubmitted) {
    successMessage =
      'Thank you for signing up! Please follow the instructions in the next window to complete your registration.';
  }

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      validateOnChange
      onSubmit={handleSubmit}>
      {({ errors, isSubmitting, isValidating, touched }) => {
        const isTouched = useMemo(
          () => Object.values(touched).some((value) => value === true),
          [touched],
        );

        const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

        const isDisabled = useMemo(
          () => !isTouched || hasErrors || isValidating || isSubmitting || isSubmitted,
          [hasErrors, isSubmitting, isTouched, isValidating, isSubmitted],
        );

        return (
          <Form
            className={className}
            css={{
              backgroundColor: theme.color.linen,

              [`@media screen and (min-width: ${theme.layout.contentWidthMax}px)`]: [
                mixins.layout.fullWidth,
              ],
            }}
            action="https://syrianmusic.us1.list-manage.com/subscribe/post?u=8b74a47300fb2a26103dd07aa&amp;id=66a839666b"
            method="POST"
            target="_blank"
            onSubmit={handleSubmit}
            noValidate>
            <div
              css={{
                background: `image-set(
                  url('/images/instruments/syrian-oud-sound-hole-closeup.png') 1x,
                  url('/images/instruments/syrian-oud-sound-hole-closeup@2x.png') 2x,
                  url('/images/instruments/syrian-oud-sound-hole-closeup@3x.png') 3x
                )
                center center no-repeat`,
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: theme.pxToRem(304),
                paddingLeft: theme.spacing.get(40),
                paddingRight: theme.spacing.get(40),

                [theme.mq.mobileToDesktop]: {
                  backgroundImage: `image-set(
                    url('/images/instruments/syrian-oud-sound-hole.png') 1x,
                    url('/images/instruments/syrian-oud-sound-hole@2x.png') 2x,
                    url('/images/instruments/syrian-oud-sound-hole@3x.png') 3x
                  )`,
                  height: theme.pxToRem(392),
                  maxWidth: theme.pxToRem(1440),
                  margin: '0 auto',
                  padding: 0,
                },
              }}>
              <Typography
                css={{
                  marginBottom: theme.spacing.get(24),

                  [theme.mq.mobileToDesktop]: { marginBottom: theme.spacing.get(40) },
                }}
                textAlign="center"
                variant="h3">
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
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',

                  [theme.mq.mobileToDesktop]: {
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    width: `${(689 / theme.layout.contentWidthMax) * 100}%`,
                    maxWidth: theme.pxToRem(689),
                  },
                }}>
                <FormikEmailInput
                  css={{ width: '100%', [theme.mq.mobileToDesktop]: { flex: 1 } }}
                  name="EMAIL"
                  placeholder="Enter your email"
                  disabled={isSubmitted}
                />

                <Button
                  css={{
                    height: theme.pxToRem(
                      inputPadding.top +
                        theme.typography.body.lg.lineHeightDesktop +
                        inputPadding.bottom +
                        inputBorderWidth * 2,
                    ),
                    marginTop: theme.spacing.get(16),
                    paddingTop: 0,
                    paddingBottom: 0,

                    [theme.mq.mobileToDesktop]: { marginTop: 0 },
                  }}
                  type="submit"
                  disabled={isDisabled}>
                  Sign up
                </Button>
              </div>
              <Typography css={{ marginTop: theme.spacing.get(16) }} textAlign="center">
                {successMessage || ' '}
              </Typography>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

NewsletterSignup.propTypes = { className: PropTypes.string };

NewsletterSignup.defaultProps = { className: undefined };

export default NewsletterSignup;
