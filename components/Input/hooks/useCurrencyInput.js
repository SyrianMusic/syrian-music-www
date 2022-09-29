import { pipe } from '../../../utils/functions';
import useInput from './useInput';

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

const useCurrencyInput = (initialValue, options) =>
  useInput(initialValue, { ...options, parseValue });

export default useCurrencyInput;
