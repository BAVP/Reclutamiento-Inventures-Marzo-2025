const BASE_URL = "http://localhost:3000/api/urls/";

// Return just the endpoint
export function clickUrl(sufix: String) {
  return BASE_URL + sufix + "/click";
}
