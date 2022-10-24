import { useField } from 'formik';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import HelperText from './HelperText';
import { StyledInput } from './Input';
import { pipe } from '../../utils/functions';

const removePrefix = (str) => str.replace(/^\$/, '');
const removeSeparators = (str) => str.replace(/,/g, '');
const toFloat = (str) => parseFloat(str, 10);

export const parseCurrencyInput = (value) => {
  if (typeof value === 'string') {
    const parsedValue = pipe(removePrefix, removeSeparators, toFloat)(value);
    return isNaN(parsedValue) ? null : parsedValue;
  }
  return '';
};

const mask = createNumberMask({ allowDecimal: true, integerLimit: 6 });

const CurrencyInput = ({ error, helperText, placeholder, ...props }) => {
  return (
    <>
      <MaskedInput
        {...props}
        mask={mask}
        inputMode="numeric"
        placeholder={placeholder}
        render={(ref, inputProps) => {
          return <StyledInput {...inputProps} error={error} ref={ref} />;
        }}
      />
      <HelperText error={Boolean(error)}>{error ? error : helperText}</HelperText>
    </>
  );
};

CurrencyInput.propTypes = {
  error: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
};

CurrencyInput.defaultProps = { error: null, helperText: null, placeholder: '$' };

export default CurrencyInput;

export const FormikCurrencyInput = (props) => {
  const [field, meta] = useField(props);

  let error;

  if (meta.touched && meta.error) {
    error = meta.error;
  }

  return <CurrencyInput {...field} {...props} error={error} />;
};
