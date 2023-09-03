import axios from 'axios';
import _merge from 'lodash/merge';

import { toCamelCase, toSnakeCase } from './caseHelper';

const TIMEOUT = 30000;

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getRequestAbortionPieces = (requestTimeout?: number | null) => {
  const abort = axios.CancelToken.source();
  const timeout = requestTimeout || TIMEOUT;
  const connectionTimeout = setTimeout(
    () => abort.cancel(`Connection timeout of ${timeout}ms.`),
    timeout,
  );

  return { abort, connectionTimeout };
};

const doRequest = async (
  axiosRequestConfig,
  convertCamelCase,
  requestTimeout = null,
) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces(requestTimeout);

  const requestConfig = {
    ...axiosRequestConfig,
    cancelToken: abort.token,
    headers: {
      ...DEFAULT_HEADERS,
      ...axiosRequestConfig.headers,
    },
  };

  const axiosInstance = axios.create();

  return axiosInstance(requestConfig)
    .then((response) => {
      clearTimeout(connectionTimeout);
      if (!response.data) {
        return response;
      }
      return {
        ...response,
        data: convertCamelCase ? toCamelCase(response.data) : response.data,
      };
    })
    .catch((e) => {
      if (axios.isCancel(e)) {
        throw e;
      }
      throw e;
    });
};

export const deleteFetch = (
  url: string,
  params: any,
  axiosConfig = {},
  requestTimeout = null,
) =>
  doRequest(
    _merge({ url, params, method: 'delete' }, axiosConfig),
    true,
    requestTimeout,
  );

export const getFetch = (
  url: string,
  params: any,
  axiosConfig = {},
  requestTimeout = null,
) =>
  doRequest(
    _merge({ url, params, method: 'get' }, axiosConfig),
    true,
    requestTimeout,
  );

export const postFetch = (
  url: string,
  data: any,
  headers = {},
  axiosConfig = {},
  requestTimeout = null,
) =>
  doRequest(
    _merge(
      {
        url,
        method: 'POST',
        headers,
        data: toSnakeCase(data),
      },
      axiosConfig,
    ),
    true,
    requestTimeout,
  );

export const postFetchCamelCase = (
  url: string,
  data: any,
  headers = {},
  axiosConfig = {},
  requestTimeout = null,
) =>
  doRequest(
    _merge(
      {
        url,
        method: 'post',
        headers,
        data,
      },
      axiosConfig,
    ),
    false,
    requestTimeout,
  );

export const uploadFile = (
  url: string,
  file: string | Blob,
  headers = {},
  onUploadProgress?: (progress: ProgressEvent) => void,
) => {
  if (!url) {
    return null;
  }
  const formData = new FormData();
  formData.append('image', file);
  return postFetch(url, formData, headers, { onUploadProgress });
};

export const putFetch = (url: string, data: any, requestTimeout = null) =>
  doRequest(
    _merge({ url, method: 'put', data: toSnakeCase(data) }, {}),
    true,
    requestTimeout,
  );

export const putFetchCamelCase = (
  url: string,
  data: any,
  requestTimeout = null,
) => doRequest(_merge({ url, method: 'put', data }, {}), true, requestTimeout);

export const requestPeople = ( url: string, data: any, requestTimeout = null) => {
  return doRequest(_merge({ url, method: 'get', data }, {}), true, requestTimeout);
}


export const requestCompany = ( url: string, data: any, requestTimeout = null) => {
  return doRequest(_merge({ url, method: 'get', data }, {}), true, requestTimeout);
}
