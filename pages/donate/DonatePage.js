import styled from '@emotion/styled';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import * as Yup from 'yup';
import Button from '../../components/Button';
import {
  FormikCurrencyInput,
  FormikEmailInput,
  FormikInput,
  HelperText,
  inputStyles,
  Label,
  parseCurrencyInput,
} from '../../components/Input';
import SiteLayout from '../../components/SiteLayout';
import Typography from '../../components/Typography';
import { gutterMarginStyles } from '../../styles/mixins';
import theme from '../../styles/theme';

const spacingStyles = { marginTop: theme.spacing.get(24) };

const TwoColumnContainer = styled.div({ display: 'flex' });
const twoColumnChildStyles = {
  flex: 1,
  '&:not(:last-child)': { marginRight: theme.spacing.get(24) },
};

const INITIAL_VALUES = {
  amount: '',
  email: '',
  name: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
};

const VALIDATION_SCHEMA = Yup.object({
  amount: Yup.string().required('Please enter an amount.'),
  email: Yup.string()
    .email('Please enter a valid email address.')
    .required('Please enter a valid email address.'),
  name: Yup.string().required('Please enter your name.'),
  address1: Yup.string().required('Please enter your address.'),
  address2: Yup.string(),
  city: Yup.string().required('Please enter your city.'),
  state: Yup.string().required('Please enter your state.'),
});

const DonatePage = ({ CardElement, submitPayment }) => {
  const [stripeError, setStripeError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = useCallback(
    async (values) => {
      const { error } = await submitPayment({
        ...values,
        amount: parseCurrencyInput(values.amount),
      });
      if (error) {
        setStripeError(error.message);
      } else {
        setShowConfirmation(true);
      }
    },
    [submitPayment],
  );

  return (
    <SiteLayout>
      <Typography
        css={{
          marginBottom: theme.spacing.get(32),

          [theme.mq.mobileToDesktop]: {
            marginBottom: theme.spacing.get(48),
          },
        }}
        variant="h1"
        textAlign="center">
        Donate Today
      </Typography>

      {showConfirmation ? (
        <Typography textAlign="center">Thank you for your donation.</Typography>
      ) : (
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={VALIDATION_SCHEMA}
          onSubmit={handleSubmit}>
          {({ errors, isSubmitting, isValidating, touched }) => {
            const isTouched = useMemo(
              () => Object.values(touched).some((value) => value === true),
              [touched],
            );

            const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

            const isDisabled = useMemo(
              () => !isTouched || hasErrors || isValidating || isSubmitting,
              [hasErrors, isSubmitting, isTouched, isValidating],
            );

            return (
              <Form
                css={[
                  gutterMarginStyles,
                  { [theme.mq.mobileToDesktop]: { marginBottom: theme.spacing.get(24) } },
                ]}>
                <Label css={spacingStyles} htmlFor="email">
                  Your Email
                </Label>
                <FormikEmailInput id="email" name="email" />

                <Label css={spacingStyles} htmlFor="amount">
                  Your Contribution
                </Label>
                <FormikCurrencyInput
                  id="amount"
                  name="amount"
                  helperText="Your donation is tax-deductible."
                  required
                />

                <Label css={{ marginTop: theme.spacing.get(40) }}>Billing Address</Label>

                <FormikInput css={spacingStyles} id="name" name="name" placeholder="Name" />

                <FormikInput
                  css={spacingStyles}
                  id="address1"
                  name="address1"
                  placeholder="Address 1"
                />

                <FormikInput
                  css={spacingStyles}
                  id="address2"
                  name="address2"
                  placeholder="Address 2"
                />

                <TwoColumnContainer css={spacingStyles}>
                  <FormikInput
                    css={twoColumnChildStyles}
                    id="city"
                    name="city"
                    placeholder="City"
                  />

                  <FormikInput
                    css={twoColumnChildStyles}
                    id="state"
                    name="state"
                    placeholder="State"
                  />
                </TwoColumnContainer>

                <Label css={spacingStyles} htmlFor="card-details">
                  Payment
                </Label>
                <CardElement
                  id="card-details"
                  css={[
                    inputStyles,
                    { ...(stripeError ? { borderColor: theme.color.error } : {}) },
                  ]}
                  disabled={isSubmitting}
                />
                <HelperText error={Boolean(stripeError)}>
                  {stripeError ? stripeError : 'Transactions are secure and encrypted.'}
                </HelperText>

                <Button
                  css={{ marginTop: theme.spacing.get(32) }}
                  type="submit"
                  disabled={isDisabled}>
                  Donate
                </Button>
              </Form>
            );
          }}
        </Formik>
      )}
    </SiteLayout>
  );
};

DonatePage.propTypes = {
  CardElement: PropTypes.elementType.isRequired,
  submitPayment: PropTypes.func.isRequired,
};

export default DonatePage;
