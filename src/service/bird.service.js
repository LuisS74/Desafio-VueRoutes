import axios from 'axios';

const BASE_URL = 'https://aves.ninjas.cl/api';

function listBirds({ limit, offset }) {
  return axios
    .get(`${BASE_URL}/birds`, {
      params: {
        limit,
        offset,
      },
    })
    .then((result) => {
      return result.data;
    });
}

function getDetails(uid) {
  return axios
    .get(`${BASE_URL}/birds/${uid}`)
    .then((result) => {
      return result.data;
    });
}

export { listBirds, getDetails };