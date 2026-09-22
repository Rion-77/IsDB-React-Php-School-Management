import { redirect } from "react-router";

export function checkToken() {
  const token = localStorage.getItem("bearer_token");
  if (token) {
    let payload = JSON.parse(atob(token?.split(".")[1]));
    if (payload.exp * 1000 < Date.now()) {
      localStorage.removeItem("bearer_token");
      return false;
    } else {
      return token;
    }
  } else {
    return false;
  }
}

export const    needToLogin = () => {
  const token = checkToken();
  if (!token) throw redirect("/login");
  return null;
};

export const loggedIn = () => {
  const token = checkToken();
  if (token) throw redirect("/");
  return null;
};
