export const getLocalStorage = (key, defaultValue) => {
  const getItemFromLocalStorage = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : defaultValue;
  return getItemFromLocalStorage;
};
