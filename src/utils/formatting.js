const convertCamelToSpaces = string => {
  const spacedString = string.replace(/([a-z])([A-Z])/g, '$1 $2');
  const answer = spacedString.toLowerCase();
  const withQuotes = `"${answer}"`;
  console.log('withQuotes:', withQuotes);
  return withQuotes;
};

const hasUpperCase = str => {
  return str.toLowerCase() !== str;
};

export const formatLabels = labels => {
  return labels.map(label => {
    if (!hasUpperCase(label)) {
      return label;
    }
    return convertCamelToSpaces(label);
  });
};
