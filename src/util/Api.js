import axios from 'axios';
import { API_URL, ACCESS_TOKEN } from '../constants/Constant';

export default axios.create({
  baseURL: `YOUR_API_URL HERE`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function postData(path, postData) {
  if (localStorage.getItem(ACCESS_TOKEN)) {
    const config = {
      headers: {
        Authorization:
          'Bearer ' + JSON.parse(localStorage.getItem(ACCESS_TOKEN)),
      },
    };
    const url = `${API_URL}/${path}`;
    return await axios.post(url, postData, config);
  } else {
    const url = `${API_URL}/${path}`;
    return await axios.post(url, postData);
  }
}

export async function postFormData(path, postData) {
  const url = `${API_URL}/${path} `;
  return await axios({
    url: url,
    method: 'POST',
    data: postData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      'Cache-Control': 'no-cache',
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem(ACCESS_TOKEN)),
    },
  });
}



export async function getData(path) {
  if (localStorage.getItem(ACCESS_TOKEN)) {
    const config = {
      headers: {
        'Cache-Control': 'no-cache',
        Authorization:
          'Bearer ' + JSON.parse(localStorage.getItem(ACCESS_TOKEN)),
      },
    };
    const url = `${API_URL}/${path}`;
    return await axios.get(url, config);
  } else {
    const url = `${API_URL}/${path}`;
    return await axios.get(url);
  }
}

export async function getFile(path) {
  if (localStorage.getItem(ACCESS_TOKEN)) {
    const config = {
      responseType: 'blob',
      headers: {
        'Cache-Control': 'no-cache',
        Authorization:
          'Bearer ' + JSON.parse(localStorage.getItem(ACCESS_TOKEN)),
      },
    };
    const url = `${API_URL}/${path}`;
    return await axios.get(url, config);
  } else {
    const url = `${API_URL}/${path}`;
    return await axios.get(url);
  }
}

export async function putData(path, postData) {
  const config = {
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem(ACCESS_TOKEN)),
    },
  };
  const url = `${API_URL}/${path}`;
  return await axios.put(url, postData, config);
}

export async function deleteData(path, postData) {
  const url = `${API_URL}/${path}`;
  return await axios({
    url: url,
    method: 'DELETE',
    data: postData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem(ACCESS_TOKEN)),
    },
  });
}
