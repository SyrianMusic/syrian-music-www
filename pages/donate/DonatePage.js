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
const twoColumnChildStyles = {
  flex: 1,
  '&:not(:last-child)': { marginRight: theme.spacing.get(24) },
};

const DonatePage = ({ CardElement, submitPayment }) => {
  const [isSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [stripeError, setStripeError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const amountInput = useCurrencyInput();
  const emailInput = useEmailInput();
  const nameInput = useInput('');
  const address1Input = useInput('');
  const address2Input = useInput('');
  const cityInput = useInput('');
  const stateInput = useInput('');

  const { value: amount, isValid: isAmountValid } = amountInput;
  const { value: email, isValid: isEmailValid } = emailInput;
  const { value: name, isValid: isNameValid } = nameInput;
  const { value: address1, isValid: isAddress1Valid } = address1Input;
  const { value: address2, isValid: isAddress2Valid } = address2Input;
  const { value: city, isValid: isCityValid } = cityInput;
  const { value: state, isValid: isStateValid } = stateInput;

  const areInputsDisabled = useMemo(() => hasSubmitted, [hasSubmitted]);

  const isFormDisabled = useMemo(
    () =>
      (hasSubmitted && !stripeError) ||
      !isAmountValid ||
      !isEmailValid ||
      !isNameValid ||
      !isAddress1Valid ||
      !isAddress2Valid ||
      !isCityValid ||
      !isStateValid,
    [
      isAmountValid,
      isEmailValid,
      isNameValid,
      isAddress1Valid,
      isAddress2Valid,
      isCityValid,
      isStateValid,
      hasSubmitted,
      stripeError,
    ],
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (isFormDisabled) return;

      setHasSubmitted(true);

      const { error } = await submitPayment({
        amount,
        email,
        name,
        address1,
        address2,
        city,
        state,
      });

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

          <Label css={{ marginTop: theme.spacing.get(40) }}>Billing Address</Label>

          <Input
            css={spacingStyles}
            id="name"
            name="name"
            placeholder="Name"
            {...nameInput}
            required
          />

          <Input
            css={spacingStyles}
            id="address1"
            name="address1"
            placeholder="Address 1"
            {...address1Input}
            required
          />

          <Input
            css={spacingStyles}
            id="address2"
            name="address2"
            placeholder="Address 2"
            {...address2Input}
          />

          <TwoColumnContainer css={spacingStyles}>
            <Input
              css={twoColumnChildStyles}
              id="city"
              name="city"
              placeholder="City"
              {...cityInput}
              required
            />

            <Input
              css={twoColumnChildStyles}
              id="state"
              name="state"
              placeholder="State"
              {...stateInput}
              required
            />
          </TwoColumnContainer>

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
