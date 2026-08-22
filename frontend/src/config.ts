import axios from "axios";

//Local
export const basePath =
  "http://localhost/react-php-school-managemet-isdb/backend/";
export const baseApiUrl =
  "http://localhost/react-php-school-managemet-isdb/backend/api/";

//Host
// export const basePath = "http://localhost/react-php-school-managemet-isdb/backend/";
// export const baseApiUrl = "http://localhost/react-php-school-managemet-isdb/backend/api/";

export const api = axios.create({
  baseURL: baseApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
