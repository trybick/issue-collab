/* eslint-disable no-extend-native */
String.prototype.camelToSpaces = function() {
  return this.replace(/([a-z])([A-Z])/g, '$1 $2');
};

String.prototype.addQuotes = function() {
  return `"${this}"`;
};

export const formatLabel = (string, purpose) => {
  return purpose === 'url'
    ? string
        .camelToSpaces()
        .toLowerCase()
        .addQuotes()
    : string.camelToSpaces().toLowerCase();
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
    return formatLabel(label, 'url');
  });
};
