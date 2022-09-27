import { useCallback, useEffect, useState } from 'react';
import { debounce } from '../../utils/functions';

const useValidation = (ref, { onChange = null, required = false } = {}) => {
  const [error, setError] = useState(null);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (isTouched) {
      ref.current.checkValidity();
    }
  }, [isTouched, ref.current]);

  const handleBlur = useCallback(() => {
    if (!isTouched) {
      setIsTouched(true);
    }
  }, [isTouched]);

  const handleInvalid = useCallback(() => {
    setError(ref.current.validationMessage);
  }, [ref.current]);

  const debouncedOnChange = useCallback(
    debounce((e) => {
      const isValid = e.target.checkValidity();

      if (!isValid) {
        setError(e.target.validationMessage);
      } else if (error) {
        setError(null);
      }

      if (typeof onChange === 'function') {
        onChange(e);
      }
    }),
    [onChange],
  );

  const handleChange = useCallback(
    (e) => {
      debouncedOnChange(e);
    },
    [debouncedOnChange],
  );

  return {
    error,
    isRequired: required && isTouched,
    handleBlur,
    handleChange,
    handleInvalid,
  };
};

export default useValidation;
