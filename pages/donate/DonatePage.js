import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import Button from '../../components/Button';
import { CurrencyInput, EmailInput, HelperText, inputStyles, Label } from '../../components/Input';
import SiteLayout from '../../components/SiteLayout';
import Typography from '../../components/Typography';
import { gutterMarginStyles } from '../../styles/mixins';
import theme from '../../styles/theme';

const DonatePage = ({ amountInput, emailInput, CardElement, submitPayment }) => {
  const { isValid: isAmountValid } = amountInput;
  const { isValid: isEmailValid } = emailInput;

  const [isSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [helperText, setHelperText] = useState(null);
  const [hasError, setHasError] = useState(false);

  const isInputDisabled = useMemo(() => hasSubmitted, [hasSubmitted]);

  const isFormDisabled = useMemo(
    () => (hasSubmitted && !hasError) || !isAmountValid || !isEmailValid,
    [isAmountValid, isEmailValid, hasError, hasSubmitted],
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setHelperText(null);
      setHasSubmitted(true);
      const { error } = await submitPayment();

      if (error) {
        setHasError(true);
        setHelperText(error.message);
      } else {
        setHasError(false);
        setHelperText('Thank you for your donation.');
      }
    },
    [hasSubmitted, submitPayment],
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

      <form css={gutterMarginStyles} onSubmit={handleSubmit}>
        <Label htmlFor="email">Your Email</Label>
        <EmailInput id="email" name="email" {...emailInput} disabled={isInputDisabled} required />

        <Label htmlFor="amount">Your Contribution</Label>
        <CurrencyInput
          id="amount"
          name="amount"
          {...amountInput}
          disabled={isInputDisabled}
          required
        />

        <Label
          css={{
            marginTop: theme.spacing.get(48),
            marginBottom: theme.spacing.get(16),

            [theme.mq.mobileToDesktop]: {
              marginTop: theme.spacing.get(64),
              marginBottom: theme.spacing.get(24),
            },
          }}
          htmlFor="card-details">
          Payment
        </Label>

        <CardElement
          id="card-details"
          css={[inputStyles, { ...(hasError ? { borderColor: theme.color.error } : {}) }]}
          disabled={isSubmitting}
        />

        <HelperText>Transactions are secure and encrypted.</HelperText>

        <Button css={{ marginTop: theme.spacing.get(32) }} type="submit" disabled={isFormDisabled}>
          Donate
        </Button>

        <HelperText
          error={hasError}
          css={{ marginTop: theme.spacing.get(32), marginBottom: theme.spacing.get(32) }}>
          {helperText}
        </HelperText>
      </form>
    </SiteLayout>
  );
};

const inputPropShape = { isValid: PropTypes.bool };

DonatePage.propTypes = {
  amountInput: PropTypes.shape(inputPropShape).isRequired,
  emailInput: PropTypes.shape(inputPropShape).isRequired,
  CardElement: PropTypes.elementType.isRequired,
  submitPayment: PropTypes.func.isRequired,
};

export default DonatePage;
