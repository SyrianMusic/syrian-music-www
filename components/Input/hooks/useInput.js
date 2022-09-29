import { useCallback, useEffect, useState } from 'react';

const useInput = (defaultValue, options = {}) => {
  const [value, setValue] = useState(defaultValue);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(null);
  const [isTouched, setIsTouched] = useState(false);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const onBlur = useCallback(
    (e) => {
      if (!isTouched) {
        setIsTouched(true);
      }

      const valid = e.target.checkValidity();

      if (valid && error) {
        clearError();
      } else if (!valid) {
        setError(e.target.validationMessage);
      }
    },
    [error, isTouched, isValid],
  );

  const onFocus = useCallback(() => {
    if (error) {
      clearError();
    }
  }, [error]);

  const onInvalid = useCallback(() => {
    if (isValid) {
      setIsValid(false);
    }
  }, [isValid]);

  useEffect(() => {
    if (typeof options.onChange === 'function') {
      options.onChange(value);
    }
  }, [value]);

  const onChange = useCallback((e) => {
    const valid = e.target.checkValidity();
    if (valid) {
      setIsValid(true);
    }
    let value = e.target.value;
    if (typeof options.parseValue === 'function') {
      value = options.parseValue(value);
    }
    setValue(value);
  }, []);

  return {
    value,
    setValue,
    error,
    isValid,
    isTouched,
    onBlur,
    onChange,
    onFocus,
    onInvalid,
  };
};

export default useInput;
