import axios from 'axios'

export function doGet(url) {
  return axios.get("https://jsonplaceholder.typicode.com" + url).then((response) => {
    return response.data;
  });
}

export function doPost(url,data) {
  return axios.post("https://jsonplaceholder.typicode.com" + url, data ).then((response) => {
    return response.data;
  });
}