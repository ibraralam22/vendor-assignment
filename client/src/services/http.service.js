import axios from 'axios';

export const postHttp = (url, entity) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, entity)
      .then((response) => {
        if (response && response.data) {
          resolve(response.data);
        }
      })
      .catch((ex) => {
        reject(ex);
      });
  });
};

export const getHttp = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then((response) => {
        if (response && response.data) {
          resolve(response.data);
        }
      })
      .catch((ex) => {
        reject(ex);
      });
  });
};

export const deleteHttp = (url, entity) => {
  return new Promise((resolve, reject) => {
    let params = {};

    params['data'] = entity;
    axios
      .delete(url, params)
      .then((response) => {
        if (response && response.data) {
          resolve(response.data);
        }
      })
      .catch((ex) => {
        reject(ex);
      });
  });
};

export const putHttp = (url, entity) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, entity)
      .then((response) => {
        if (response && response.data) {
          resolve(response.data);
        }
      })
      .catch((ex) => {
        reject(ex);
      });
  });
};
