export const BASE_URL = "http://localhost:3000/api/urls/";

// RETURN JUST ENDPOINTS

export function clickUrl(sufix: String) {
  return BASE_URL + sufix + "/clicks";
}

export function searchUrl(sufix: String) {
  return BASE_URL + sufix;
}

export function checkIfSufixExist(sufix: String) {
  return BASE_URL + sufix + "/exist";
}
