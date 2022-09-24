import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { debounce, pipe } from '../../utils/functions';

const mask = createNumberMask({ allowDecimal: true, integerLimit: 7 });

const removePrefix = (str) => str.replace(/^\$/, '');
const removeSeparators = (str) => str.replace(/,/g, '');
const toFloat = (str) => parseFloat(str, 10);

const CurrencyInput = ({ id, label, name, onChange }) => {
  const [amount, setAmount] = useState(null);

  const debouncedOnChange = useCallback(debounce(onChange), [onChange]);

  const handleChange = (e) => {
    setAmount(e.target.value);

    let value = pipe(removePrefix, removeSeparators, toFloat)(e.target.value);
    if (isNaN(value)) {
      value = null;
    }

    debouncedOnChange({ name: e.target.name, value });
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <MaskedInput
        mask={mask}
        inputMode="numeric"
        id={id}
        name={name}
        onChange={handleChange}
        value={amount === null ? '' : amount}
      />
    </>
  );
};

CurrencyInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

CurrencyInput.defaultProps = {
  onChange: () => {},
};

export default CurrencyInput;
