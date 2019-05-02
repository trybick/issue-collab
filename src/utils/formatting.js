/* eslint-disable no-extend-native */
String.prototype.camelToSpaces = function() {
  return this.replace(/([a-z])([A-Z])/g, '$1 $2');
};

String.prototype.addQuotes = function() {
  return `"${this}"`;
};

const hasUpperCase = str => {
  return str.toLowerCase() !== str;
};

export const formatLabel = (string, purpose) => {
  return purpose === 'url'
    ? string
        .camelToSpaces()
        .toLowerCase()
        .addQuotes()
    : string.camelToSpaces().toLowerCase();
};

export const formatLabels = labels => {
  return labels.map(label => {
    if (!hasUpperCase(label)) {
      return label;
    }
    return formatLabel(label, 'url');
  });
};
