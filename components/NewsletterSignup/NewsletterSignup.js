import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import * as Yup from 'yup';
import * as mixins from '../../styles/mixins';
import theme from '../../styles/theme';
import Button from '../Button';
import { FormikEmailInput, inputBorderWidth, inputPadding } from '../Input';
import Typography from '../Typography';

const INITIAL_VALUES = { email: '' };

const VALIDATION_SCHEMA = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email address.')
    .required('Please enter a valid email address.'),
});

const NewsletterSignup = ({ className, subscribe }) => {
  const [error, setError] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = useCallback(
    async (values) => {
      setError(null);

      const { error } = await subscribe({
        email: values.email,
        component: 'Footer',
        url: window.location.href,
      });

      if (error) {
        setError(error.message);
      } else {
        setIsSubscribed(true);
      }
    },
    [subscribe],
  );

  let successMessage;

  if (isSubscribed) {
    successMessage =
      'Thank you for signing up! Check your inbox for a message to confirm your email address.';
  }

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}>
      {({ errors, isSubmitting, isValidating, touched }) => {
        // const [isSubmitted, setIsSubmitted] = useState(false);

        const isTouched = useMemo(
          () => Object.values(touched).some((value) => value === true),
          [touched],
        );

        const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

        const isDisabled = useMemo(
          () => !isTouched || hasErrors || isValidating || isSubmitting || isSubscribed,
          [hasErrors, isSubmitting, isTouched, isValidating, isSubscribed],
        );

        return (
          <Form
            className={className}
            css={{
              backgroundColor: theme.color.linen,

              [theme.mq.contentWidthMax]: [{}, mixins.layout.fullWidth],
            }}
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
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  disabled={isSubscribed}
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
              <Typography
                css={{
                  color: error ? theme.color.error : theme.color.primary,
                  marginTop: theme.spacing.get(16),
                }}
                textAlign="center">
                {successMessage || error || ' '}
              </Typography>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

NewsletterSignup.propTypes = { className: PropTypes.string, subscribe: PropTypes.func.isRequired };

NewsletterSignup.defaultProps = { className: undefined };

export default NewsletterSignup;
