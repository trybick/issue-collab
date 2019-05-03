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

function hasWhiteSpace(string) {
  return string.indexOf(' ') >= 0;
}

export const formatLabelForName = name => {
  return name.camelToSpaces().toLowerCase();
};

export const formatLabelsForUrl = labels => {
  return labels.map(label => {
    if (!hasUpperCase(label)) {
      return label;
    }
    return label
      .camelToSpaces()
      .toLowerCase()
      .addQuotes();
  });
};

export const formatTextToSearch = text => {
  if (text !== '') {
    if (hasWhiteSpace(text)) {
      return `${`${text}`.addQuotes()}+`;
    }
    return `${text}+`;
  }
  return '';
};
