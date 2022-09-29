import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { pipe } from '../../utils/functions';
import { ErrorText } from './HelperText';
import { StyledInput } from './Input';
import useInput from './useInput';

const mask = createNumberMask({ allowDecimal: true, integerLimit: 7 });

const removePrefix = (str) => str.replace(/^\$/, '');
const removeSeparators = (str) => str.replace(/,/g, '');
const toFloat = (str) => parseFloat(str, 10);

const parseValue = (value, initialValue) => {
  if (typeof value === 'string') {
    const parsedValue = pipe(removePrefix, removeSeparators, toFloat)(value);
    return isNaN(parsedValue) ? null : parsedValue;
  }
  return initialValue;
};

export const useCurrencyInput = (initialValue, options) =>
  useInput(initialValue, { ...options, parseValue });

const CurrencyInput = ({ error, ...props }) => {
  return (
    <>
      <MaskedInput
        {...props}
        mask={mask}
        inputMode="numeric"
        render={(ref, inputProps) => {
          return <StyledInput {...inputProps} ref={ref} />;
        }}
      />
      <ErrorText>{error}</ErrorText>
    </>
  );
};

CurrencyInput.propTypes = { error: PropTypes.string };

CurrencyInput.defaultProps = { error: null };

export default CurrencyInput;