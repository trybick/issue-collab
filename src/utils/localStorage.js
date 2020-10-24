const handleLocalStorageErrors = () => {
  console.error('LocalStorage is unavailable');
  return null;
};

export function setLocalStorageItem(name, value) {
  if (window.localStorage) {
    return window.localStorage.setItem(name, value);
  }
  return handleLocalStorageErrors();
}

export function getLocalStorageItem(name) {
  if (window.localStorage) {
    return window.localStorage.getItem(name);
  }
  return handleLocalStorageErrors();
}

export const getIsDarkModeEnabled = () => {
  return getLocalStorageItem('dark-mode') === 'true';
};
