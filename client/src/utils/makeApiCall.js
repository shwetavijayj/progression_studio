import axios from 'axios';
import { retrieveToken } from './localStorage';

export const apiActionTypes = x => ({
  request: `${x}_REQUEST`,
  success: `${x}_SUCCESS`,
  failure: `${x}_FAILURE`
});

const isTokenEmpty = x => x == null || x === undefined || x === 'undefined';

export const callApi = requestConfig => {
  const token = retrieveToken();
  const headerWithoutToken = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const headerWithToken = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  const headers = isTokenEmpty(token) ? headerWithoutToken : headerWithToken;

  const axiosConfig = merge({}, headers, requestConfig, {
    url: `${requestConfig.url}`,
    mode: 'no-cors'
  });

  return axios(axiosConfig)
    .then(response => {
      if (response.data) {
        if (response.data.error) {
          return Promise.reject(response.data.error);
        }
        return response.data;
      }
      return null;
    })
    .catch(error => {
      return Promise.reject(error);
    });
};
