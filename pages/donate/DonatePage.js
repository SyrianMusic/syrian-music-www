import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import SiteLayout from '../../components/SiteLayout';
import debounce from '../../utils/debounce';

const DonatePage = ({ CardElement, onChange, onSubmit }) => {
  const [amount, setAmount] = useState(null);
  const [isDisabled] = useState(true);

  const debouncedOnChange = useCallback(debounce(onChange), [onChange]);

  const handleChange = useCallback((e) => {
    let name = e.target.name;
    let value = e.target.value;

    let handler;

    switch (name) {
      case 'amount':
        value = parseFloat(value, 10);
        if (isNaN(value)) {
          value = null;
        }
        handler = setAmount;
        break;
      default:
        console.error(name + ' is not supported');
    }
    handler(value);

    debouncedOnChange({ name, value });
  });

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
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          type="number"
          onChange={handleChange}
          value={amount === null ? '' : amount}
        />
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
