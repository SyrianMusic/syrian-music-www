import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import HelperText from './HelperText';
import { StyledInput } from './Input';

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
          return <StyledInput {...inputProps} ref={ref} />;
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
