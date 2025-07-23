import CONFIG from "config/api";
import storage from "lib/storage";
import abortController from "lib/abortController";

import {
  loginUrl,
} from "modules/Auth/api/endpoints";

const { API_BASE_URL } = CONFIG;
const baseURL = `${API_BASE_URL}`;

const publicUrls = [
  `${baseURL}${loginUrl()}`,
  `${baseURL}/cgus/application`,
];

const Api = () => {
  const core = async (url, method, data, isForm) => {
    try {
      const { result_session, result_jwt } = await storage.getPermissions();

      const isPublic = publicUrls.includes(url);
      const headers = {
        Accept: "application/json",
        "Content-Type": isForm ? "multipart/form-data" : "application/json",
      };

      // Add token and session headers for protected endpoints
      if (!isPublic && result_jwt) {
        headers["Authorization"] = `Bearer ${result_jwt}`;
      }
      if (!isPublic && result_session) {
        headers["Cookie"] = result_session;
      }

      const fetchParams = {
        method,
        headers,
        body: method !== "GET" ? (isForm ? data : JSON.stringify(data)) : undefined,
        signal: abortController.getInstance().signal,
      };

      const response = await fetch(url, fetchParams);

      // Save any auth-related headers back to storage
      const ckie = response?.headers?.get("set-cookie");
      const authToken = response?.headers?.get("x-auth-token");
      const refreshToken = response?.headers?.get("x-refresh-token");

      if (ckie) storage.setSession(ckie);
      if (authToken) storage.setJWT(authToken);
      if (refreshToken) storage.setRefreshJWT(refreshToken);

      if (response.ok) {
        return await response.json();
      } else {
        const error = await response.json().catch(() => null);
        throw error || new Error("API Error");
      }
    } catch (err) {
      if (err.name === "AbortError") {
        throw new Error("Request was aborted.");
      }
      throw err;
    }
  };

  return {
    get: (path) => core(`${baseURL}${path}`, "GET"),
    post: (path, payload, isForm = false) =>
      core(`${baseURL}${path}`, "POST", payload, isForm),
    put: (path, payload) =>
      core(`${baseURL}${path}`, "PUT", payload),
    delete: (path) =>
      core(`${baseURL}${path}`, "DELETE"),
    cancelRequest: () => {
      abortController.getInstance().abort();
    },
  };
};

export default Api;
