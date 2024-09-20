import React from 'react';

export function useFormValidation<T>(defaultValues?: T) {
  const [values, setValues] = React.useState<T>(defaultValues || ({} as T));
  const [errors, setErrors] = React.useState<Partial<Record<keyof T, string>>>({});

  const register = (name: keyof T) => ({
    name: name as string,
    value: values[name] || '',
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | Event & { target: {
        value: string;
        name: string;
      } }
    ) => {
      const value = e.target.value;
      setValues({
        ...values,
        [name]: value,
      });
    },
  });

  const handleSubmit = (onValid: (data: T) => void) => (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof T, string>> = {};

    for (const key in values) {
      if (!values[key]) {
        newErrors[key] = 'This field is required';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      onValid(values);
    }
  };

  const formState = { errors };

  return { register, handleSubmit, formState };
}
