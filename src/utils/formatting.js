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

// multi words labels like "help wanted" need to be written in camelCase  (helpWanted) in the app
// here we change them to be lower case, spaced, and surrounded by quotes
export const formatLabels = labels => {
  return labels.map(label => {
    if (!hasUpperCase(label)) {
      return label;
    }
    return convertCamelToSpaces(label);
  });
};
