const dataHelper = (
  elType,
  type,
  placeholder,
  value,
  required,
  valid,
  minLength,
  maxLength,
  touched
) => {
  const test = {
    elementType: elType,
    elementConfig: {
      type: type,
      placeholder: placeholder,
    },
    value: value,
    validation: {
      required: required,
      minLength: minLength,
      maxLength: maxLength,
    },
    valid: valid,
    touched: touched,
  };

  return test;
};

export default dataHelper;
