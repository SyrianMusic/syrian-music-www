import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import Button from '../../components/Button';
import {
  CurrencyInput,
  EmailInput,
  HelperText,
  inputStyles,
  Label,
  useCurrencyInput,
  useInput,
} from '../../components/Input';
import SiteLayout from '../../components/SiteLayout';
import Typography from '../../components/Typography';
import { gutterMarginStyles } from '../../styles/mixins';
import theme from '../../styles/theme';

const StyledLabel = styled(Label)({
  marginTop: theme.spacing.get(24),
  marginBottom: theme.spacing.get(16),
});

const DonatePage = ({ CardElement, submitPayment }) => {
  const [isSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [helperText, setHelperText] = useState(null);
  const [hasError, setHasError] = useState(false);

  const amountInput = useCurrencyInput(null);
  const emailInput = useInput(null);

  const { value: amount, isValid: isAmountValid } = amountInput;
  const { value: email, isValid: isEmailValid } = emailInput;

  const areInputsDisabled = useMemo(() => hasSubmitted, [hasSubmitted]);

  const isFormDisabled = useMemo(
    () => (hasSubmitted && !hasError) || !isAmountValid || !isEmailValid,
    [isAmountValid, isEmailValid, hasError, hasSubmitted],
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      setHelperText(null);
      setHasSubmitted(true);

      const { error } = await submitPayment({ amount, email });

      if (error) {
        setHasError(true);
        setHelperText(error.message);
      } else {
        setHasError(false);
        setHelperText('Thank you for your donation.');
      }
    },
    [amount, email, hasSubmitted, submitPayment],
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
        <StyledLabel htmlFor="email">Your Email</StyledLabel>
        <EmailInput id="email" name="email" {...emailInput} disabled={areInputsDisabled} required />

        <StyledLabel htmlFor="amount">Your Contribution</StyledLabel>
        <CurrencyInput
          id="amount"
          name="amount"
          {...amountInput}
          disabled={areInputsDisabled}
          required
        />

        <StyledLabel htmlFor="card-details">Payment</StyledLabel>
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

DonatePage.propTypes = {
  CardElement: PropTypes.elementType.isRequired,
  submitPayment: PropTypes.func.isRequired,
};

export default DonatePage;
