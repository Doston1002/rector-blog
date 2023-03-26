import axios from "axios";

export async function clientApi(url, method, baseUrl, headers, data) {
  const res = await axios(url, method, baseUrl, headers, data);
  return res.json();
}

export const setHeaders = ({ method, body, headers }) => {
  method, {}, body;
};
