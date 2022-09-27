import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import Button from '../../components/Button';
import { CurrencyInput, EmailInput, HelperText, inputStyles, Label } from '../../components/Input';
import SiteLayout from '../../components/SiteLayout';
import Typography from '../../components/Typography';
import { gutterMarginStyles } from '../../styles/mixins';
import theme from '../../styles/theme';

const DonatePage = ({ CardElement, onChange, onSubmit }) => {
  const [hasAmount, setHasAmount] = useState(false);

  const isDisabled = useMemo(() => !hasAmount, [hasAmount]);

  const handleAmountChange = useCallback(
    ({ name, value }) => {
      if (!hasAmount && value) {
        setHasAmount(true);
      } else if (hasAmount && !value) {
        setHasAmount(false);
      }

      if (value) {
        onChange({ name, value });
      }
    },
    [hasAmount],
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit();
    },
    [onSubmit],
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

      <form css={[gutterMarginStyles]} onSubmit={handleSubmit}>
        <Label htmlFor="email">Your Email</Label>
        <EmailInput id="email" />

        <CurrencyInput id="amount" name="amount" label="Amount" onChange={handleAmountChange} />

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

        <CardElement id="card-details" css={inputStyles} />

        <HelperText>Transactions are secure and encrypted.</HelperText>

        <Button css={{ marginTop: theme.spacing.get(32) }} type="submit" disabled={isDisabled}>
          Donate
        </Button>
      </form>
    </SiteLayout>
  );
};

DonatePage.propTypes = {
  CardElement: PropTypes.elementType.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

DonatePage.defaultProps = {};

export default DonatePage;
