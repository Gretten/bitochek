import { useState } from 'react';
import isNumeric from 'validator/es/lib/isNumeric';

export const useFormValidation = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [errorMessages, setErrorMessages] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const newErrorMessages = {};

    if (!isNumeric(values.count)) {
      newErrors.count = true;
      newErrorMessages.count = 'Введите число';
    }

    if (!isNumeric(values.price)) {
        newErrors.price = true;
        newErrorMessages.price = 'Введите число';
    }

    return { newErrors, newErrorMessages };
  };

  const handleSubmit = (callback) => {
    const { newErrors, newErrorMessages } = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setErrorMessages(newErrorMessages);

      const clearedValues = { ...values };
      Object.keys(newErrors).forEach((key) => {
        if (newErrors[key]) {
          clearedValues[key] = '';
        }
      });

      setValues(clearedValues);
    } else {
      setErrors({});
      setErrorMessages({});
      callback(); 
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    errors,
    errorMessages,
    handleChange,
    handleSubmit,
  };
};
