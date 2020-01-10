import { getCSRFToken } from './csrf';

const APPLICATION_JSON = 'application/json';

function addCSRFSettings(request) {
  const csrfRequest = {
    ...request,
    headers: {
      'X-Requested-With': 'XMLHTTPRequest',
      'X-CSRF-Token': getCSRFToken(),
    },
    credentials: 'same-origin',
  };

  if (request.headers) {
    csrfRequest.headers = {
      ...request.headers,
      ...csrfRequest.headers,
    };
  }

  return csrfRequest;
}

function buildRequest(method, body) {
  const request = {
    headers: {
      Accept: APPLICATION_JSON,
    },
    cache: 'default',
    method,
  };

  if (body) {
    if (body instanceof FormData) {
      request.body = body;
    } else {
      request.body = JSON.stringify(body);
      request.headers['Content-Type'] = APPLICATION_JSON;
    }
  }

  return addCSRFSettings(request);
}

async function callFetch(path, request) {
  const response = await fetch(path, request);

  if (response.status === 204) { return null; } // NO CONTENT
  if (response.ok) { return response.json(); }

  // TODO Add better error processing
  return null;
}

function create(resourceName, data) {
  return post(
    `/api/${resourceName}s`,
    data,
  );
}

function get(path) {
  return callFetch(path, buildRequest('GET'));
}

function post(path, data) {
  return callFetch(
    path,
    buildRequest('POST', data),
  );
}

export default {
  create,
  get,
  post,
};
