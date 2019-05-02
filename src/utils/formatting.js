const convertCamelToSpaces = string => {
  console.log('string:', string);
  const spacedString = string.replace(/([a-z])([A-Z])/g, '$1 $2');
  const answer = spacedString.toLowerCase();
  console.log('answer:', answer);
  return answer;
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
