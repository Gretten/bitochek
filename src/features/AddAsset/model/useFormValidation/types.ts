export interface UseFormReturn<T> {
    register: (name: keyof T) => {
      name: string;
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    };
    handleSubmit: (
      onValid: (data: T) => void
    ) => (e: React.FormEvent<HTMLFormElement>) => void;
    formState: {
      errors: Partial<Record<keyof T, string>>;
    };
  }