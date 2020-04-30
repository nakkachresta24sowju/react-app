<<<<<<< HEAD
import Cookie from "js-cookie";

export const ACCESS_TOKEN = "dG6EABne5a";

export function getCookie(key) {
  return Cookie.get(key);
=======
import Cookie from 'js-cookie'

export const ACCESS_TOKEN = 'dG6EABne5a'

export function getCookie(key) {
  return Cookie.get(key)
>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d
}

function setCookie(key, value) {
  Cookie.set(key, value, {
    expires: 30,
<<<<<<< HEAD
    path: "/",
=======
    path: '/',
>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d
  });
}

export function getAccessToken() {
  return getCookie(ACCESS_TOKEN);
}
export function setAccessToken(accessToken) {
  setCookie(ACCESS_TOKEN, accessToken);
}

export function clearUserSession() {
<<<<<<< HEAD
  Cookie.remove(ACCESS_TOKEN, { path: "/" });
=======
  Cookie.remove(ACCESS_TOKEN, { path: '/' });
>>>>>>> 2d081f70b62482d10921f47c6baf45bdf092b96d
}
