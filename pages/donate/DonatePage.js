import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import Button from '../../components/Button';
import Input, {
  CurrencyInput,
  EmailInput,
  HelperText,
  inputStyles,
  Label,
  useCurrencyInput,
  useEmailInput,
  useInput,
} from '../../components/Input';
import SiteLayout from '../../components/SiteLayout';
import Typography from '../../components/Typography';
import { gutterMarginStyles } from '../../styles/mixins';
import theme from '../../styles/theme';

const spacingStyles = { marginTop: theme.spacing.get(24) };

const TwoColumnContainer = styled.div({ display: 'flex' });
const TwoColumnChild = styled.div({
  flex: 1,
  '&:not(:last-child)': { marginRight: theme.spacing.get(24) },
});

const DonatePage = ({ CardElement, submitPayment }) => {
  const [isSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [stripeError, setStripeError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const amountInput = useCurrencyInput();
  const emailInput = useEmailInput();
  const nameInput = useInput('');

  const { value: amount, isValid: isAmountValid } = amountInput;
  const { value: email, isValid: isEmailValid } = emailInput;
  const { value: name, isValid: isNameValid } = nameInput;

  const areInputsDisabled = useMemo(() => hasSubmitted, [hasSubmitted]);

  const isFormDisabled = useMemo(
    () => (hasSubmitted && !stripeError) || !isAmountValid || !isEmailValid || !isNameValid,
    [isAmountValid, isEmailValid, isNameValid, hasSubmitted, stripeError],
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (isFormDisabled) return;

      setHasSubmitted(true);

      const { error } = await submitPayment({ amount, email, name });

      if (error) {
        setStripeError(error.message);
      } else {
        setShowConfirmation(true);
      }
    },
    [amount, email, hasSubmitted, isFormDisabled, submitPayment],
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
        <form css={gutterMarginStyles} onSubmit={handleSubmit}>
          <Label css={spacingStyles} htmlFor="email">
            Your Email
          </Label>
          <EmailInput
            id="email"
            name="email"
            {...emailInput}
            disabled={areInputsDisabled}
            required
          />

          <Label css={spacingStyles} htmlFor="amount">
            Your Contribution
          </Label>
          <CurrencyInput
            id="amount"
            name="amount"
            {...amountInput}
            helperText="Your donation is tax-deductible."
            disabled={areInputsDisabled}
            required
          />

          <Label css={spacingStyles} htmlFor="name">
            Name
          </Label>
          <Input id="name" name="name" {...nameInput} required />

          <Label css={spacingStyles} htmlFor="card-details">
            Payment
          </Label>
          <CardElement
            id="card-details"
            css={[inputStyles, { ...(stripeError ? { borderColor: theme.color.error } : {}) }]}
            disabled={isSubmitting}
          />
          <HelperText error={Boolean(stripeError)}>
            {stripeError ? stripeError : 'Transactions are secure and encrypted.'}
          </HelperText>

          <Button
            css={{ marginTop: theme.spacing.get(32) }}
            type="submit"
            disabled={isFormDisabled}>
            Donate
          </Button>
        </form>
      )}
    </SiteLayout>
  );
};

DonatePage.propTypes = {
  CardElement: PropTypes.elementType.isRequired,
  submitPayment: PropTypes.func.isRequired,
};

export default DonatePage;
