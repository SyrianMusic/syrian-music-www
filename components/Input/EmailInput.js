import PropTypes from 'prop-types';
import { TextInput } from './TextInput';

export const EmailInput = ({ label, name, value, onChange }) => {
  return <TextInput name={name} type="email" label={label} value={value} onChange={onChange} />;
};

EmailInput.propTypes = {
  label: PropTypes.string.isRequired,
};

EmailInput.defaultProps = {};
