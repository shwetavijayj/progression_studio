const AUTHERIZAION_TOKEN = 'AutherizationToken';
export const saveToken = token => {
  try {
    const serializedState = JSON.stringify(token);
    localStorage.setItem(AUTHERIZAION_TOKEN, serializedState);
  } catch (err) {
    console.log('Error in local storage', err);
  }
};

export const retrieveToken = () => {
  let token = localStorage.getItem(AUTHERIZAION_TOKEN);
  if (token === null) {
    return undefined;
  }
  token = JSON.parse(token);
  return !token || token == null || token === '' ? '' : token.access_token;
};
