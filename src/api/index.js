const BASE_URL = 'https://swapi.dev/api/';

export const fetchSWRoleData = (role) => {
  return fetch(`${BASE_URL}${role}/`)
    .then((resp) => {
      if (!resp.ok) {
        throw 'something wrong';
      }
      return resp.json();
    })
    .then((data) => data.results);
};
