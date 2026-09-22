import axios from "axios";
import { checkToken } from "./utils/auth";

//Local
export const basePath = "http://localhost/react-php-school-managemet-isdb/backend/";
export const baseApiUrl = "http://localhost/react-php-school-managemet-isdb/backend/api/";

//Host
// export const basePath = "http://localhost/react-php-school-managemet-isdb/backend/";
// export const baseApiUrl = "http://localhost/react-php-school-managemet-isdb/backend/api/";

export const api = axios.create({
  baseURL: baseApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = checkToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
