import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { ErrorText } from './HelperText';
import { StyledInput } from './Input';

const mask = createNumberMask({ allowDecimal: true, integerLimit: 6 });

const CurrencyInput = ({ error, placeholder, ...props }) => {
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
      <ErrorText>{error}</ErrorText>
    </>
  );
};

CurrencyInput.propTypes = { error: PropTypes.string, placeholder: PropTypes.string };

CurrencyInput.defaultProps = { error: null, placeholder: '$' };

export default CurrencyInput;
