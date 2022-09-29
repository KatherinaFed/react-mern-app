export const getRefreshToken = () => {
  if (typeof Storage === 'undefined') return false;
  return JSON.parse(localStorage.getItem('tokens') || '{}')?.refreshToken;
};

export const getAccessToken = () => {
  if (typeof Storage === 'undefined') {
    return new Error('Storage type not valid');
  }

  return JSON.parse(localStorage.getItem('tokens') || '{}')?.accessToken;
};

export const updateAccessToken = (token: string): void => {
  if (typeof Storage === 'undefined') return;
  const tokenUser = JSON.parse(localStorage.getItem('tokens') || '{}');


  tokenUser.accessToken = token;
  localStorage.setItem('tokens', JSON.stringify(tokenUser));
};

export const isAuthenticated = () => {
  const accessToken = getAccessToken();
  if (!accessToken) return false;
  return true;
};

console.log('isAuthenticated:', isAuthenticated())