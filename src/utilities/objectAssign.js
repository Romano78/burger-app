export const objectAssign = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    updatedValues: {
      ...updatedValues,
    },
  };
};
