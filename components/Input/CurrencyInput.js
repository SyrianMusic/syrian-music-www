import PropTypes from 'prop-types';
import { useRef } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { pipe } from '../../utils/functions';
import { ErrorText } from './HelperText';
import { StyledInput } from './Input';
import useValidation from './useValidation';

const mask = createNumberMask({ allowDecimal: true, integerLimit: 7 });

const removePrefix = (str) => str.replace(/^\$/, '');
const removeSeparators = (str) => str.replace(/,/g, '');
const toFloat = (str) => parseFloat(str, 10);

const CurrencyInput = ({ onChange: onChangeProp, required, ...props }) => {
  const input = useRef(null);

  let onChange;

  if (typeof onChangeProp === 'function') {
    onChange = (e) => {
      let value = pipe(removePrefix, removeSeparators, toFloat)(e.target.value);
      if (isNaN(value)) {
        value = null;
      }
      onChangeProp(value, e);
    };
  }

  const { error, isRequired, handleBlur, handleChange, handleInvalid } = useValidation(input, {
    onChange,
    required,
  });

  return (
    <>
      <MaskedInput
        ref={(ref) => {
          input.current = ref?.inputElement || null;
        }}
        mask={mask}
        inputMode="numeric"
        onInvalid={handleInvalid}
        placeholder="$"
        required={isRequired}
        render={(ref, inputProps) => {
          return (
            <StyledInput
              ref={ref}
              {...inputProps}
              onBlur={(e) => {
                if (typeof inputProps.onBlur === 'function') {
                  inputProps.onBlur(e);
                }
                handleBlur(e);
              }}
              onChange={(e) => {
                if (typeof inputProps.onChange === 'function') {
                  inputProps.onChange(e);
                }
                handleChange(e);
              }}
            />
          );
        }}
        {...props}
      />
      <ErrorText>{error}</ErrorText>
    </>
  );
};

CurrencyInput.propTypes = {
  onChange: PropTypes.func,
};

CurrencyInput.defaultProps = {
  onChange: () => {},
};

export default CurrencyInput;
