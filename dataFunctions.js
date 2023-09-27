// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const sortBy = (data, order) => {
  if (order === 'asc') {
    return data.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (order === 'desc') {
    return data.slice().sort((a, b) => b.name.localeCompare(a.name));
  }
};

export const filterBy = (data, mainField) => {
  if (mainField === "") return data;
  return data.filter(item => item.facts.mainField.includes(mainField));
};

export const computeStats = (data) => {
  const length = data.reduce((acc) => acc + 1, 0);
  return parseInt(length);
};
