const convertCamelToSpaces = string => {
  return string.replace(/([a-z])([A-Z])/g, '$1 $2');
};

const hasUpperCase = str => {
  return str.toLowerCase() !== str;
};

export const format = array => {
  array.forEach(item => {
    if (hasUpperCase(item)) {
      convertCamelToSpaces(item);
    }
  });
};
