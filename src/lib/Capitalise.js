export const Capitalize = (str) => {
  return str && str.length && str.length >= 1
    ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    : "";
};
