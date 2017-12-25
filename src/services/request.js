const BASE_URL = 'http://localhost:8081/';

export const request = (url = '', type = 'get', data = null) => $.ajax({
  type,
  url: `${BASE_URL}${url}`,
  data,
  xhrFields: {
    withCredentials: true
  }
});
