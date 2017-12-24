const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const request = (url = '', type = 'get', data = null) => $.ajax({
  type,
  url: `${BASE_URL}${url}`,
  data,
  xhrFields: {
    withCredentials: true
  }
});
