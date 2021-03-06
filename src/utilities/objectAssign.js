export const objectAssign = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= 5 && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= 5 && isValid;
  }

  return isValid;
};
