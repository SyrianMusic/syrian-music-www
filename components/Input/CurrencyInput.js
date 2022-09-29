import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { ErrorText } from './HelperText';
import { StyledInput } from './Input';

const mask = createNumberMask({ allowDecimal: true, integerLimit: 7 });

const CurrencyInput = ({ error, ...props }) => {
  return (
    <>
      <MaskedInput
        {...props}
        mask={mask}
        inputMode="numeric"
        placeholder="$"
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
