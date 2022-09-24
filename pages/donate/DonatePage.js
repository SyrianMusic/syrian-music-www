import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import { CurrencyInput } from '../../components/Input';
import SiteLayout from '../../components/SiteLayout';

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
      <form onSubmit={handleSubmit}>
        <CurrencyInput id="amount" name="amount" label="Amount" onChange={handleAmountChange} />
        <CardElement />
        <button type="submit" disabled={isDisabled}>
          Donate
        </button>
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
