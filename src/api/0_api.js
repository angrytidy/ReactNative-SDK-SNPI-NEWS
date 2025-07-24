"use strict";
import CookieManager from "react-native-cookies";
import CONFIG from "config/api";
import storage from "lib/storage";

import abortController from "lib/abortController";

// public urls
import {
  // loginUrlUser,
  // loginUrlDoctor,
  // passwordUrlUser,
  // passwordUrlDoctor,
  // signOutUrlUser,
  // signOutUrlDoctor,
  loginUrl,
} from "modules/Auth/api/endpoints";

const { API_BASE_URL /*API_VERSION , REQUEST_TIMER*/ } = CONFIG;
const baseURL = `${API_BASE_URL}`;

const publicUrls = [
  `${baseURL}${loginUrl()}`,
  `${baseURL}/cgus/application`,
];

const Api = () => {
  const core = (url, method, data, isForm) => {
    const promise = new Promise((resolve, reject) => {
      return storage.getPermissions().then((vrb) => {
        let { result_session, result_jwt, result_refresh } = vrb;
        const withPermissions =
          result_jwt && result_session && !publicUrls.includes(url);
        // console.log("session ==", result_session);
        // console.log("JWT ==", result_jwt);
        // configure request body
        const body = isForm ? data : JSON.stringify(data);

        // configure request header
        const formHeaders = {
          Accept: "application/json",
          "Content-Type": "application/json",
        };

        const headers = {
          ...formHeaders,
          Authorization: `Bearer ${result_jwt}`,
          cookie: result_session,
        };
        /**
         * Send undefined cookie
         * to receive the newest (login)
         */
        if (
          url === publicUrls[0] ||
          url === publicUrls[1] ||
          result_session === ""
        ) {
          headers.cookie = undefined;
        }

        /**
         * Delete local cookie  (logout)
         */
        if (url === publicUrls[2] || url === publicUrls[3]) {
          storage.setSession("");
        }
        let fetchParams = {
          method,
          headers,
          body,
          credentials: "include",
        };

        // Clearing all cookies stored by native cookie managers.
        return CookieManager.clearAll().then(() => {
          return fetch(url, fetchParams)
            .then((response) => {
              // console.log("Response", response);
              // console.log("REQUEST", fetchParams);

              if (url === publicUrls[0] || url === publicUrls[1]) {
                storage.setSession("");
              }

              if (response.status >= 200 && response.status < 300) {
                resolve(response);
              } else {
                response
                  .json()
                  .then((result) => {
                    reject(result);
                  })
                  .catch(() => reject(null));
              }
            })
            .catch((err) => {
              if (err.name === "AbortError") {
                reject(new Error("Response timed out"));
              } else {
                reject(err);
              }
            })
            .finally(() => {
              // if (url === publicUrls[2] || url === publicUrls[3]) {
              //   storage.setJWTssion('');
              // }
            });
        });
      });
    });

    return promise;
  };

  return {
    get: (path, payload) => {
      const promise = new Promise((resolve, reject) => {
        const url = `${baseURL}${path}`;
        core(url, "GET", payload)
          .then((reponse) => {
            const ckie = reponse?.headers?.get("set-cookie");
            const AUTH_TOKEN = reponse?.headers?.map["x-auth-token"];
            const REFRESH_TOKEN = reponse?.headers?.map["x-refresh-token"];
            if (ckie) {
              storage.setSession(ckie);
            }
            if (AUTH_TOKEN) {
              storage.setJWT(AUTH_TOKEN);
            }
            if (REFRESH_TOKEN) {
              storage.setRefreshJWT(REFRESH_TOKEN);
            }

            return reponse.json();
          })
          .then((data) => {
            resolve(data);
          })
          .catch((error) => reject(error));
      });
      return promise;
    },
    post: (path, payload, isForm) => {
      const promise = new Promise((resolve, reject) => {
        const url = `${baseURL}${path}`;

        core(url, "POST", payload, isForm)
          .then((reponse) => {
            const ckie = reponse?.headers?.get("set-cookie");
            const AUTH_TOKEN = reponse?.headers?.map["x-auth-token"];
            const REFRESH_TOKEN = reponse?.headers?.map["x-refresh-token"];
            if (ckie) {
              storage.setSession(ckie);
            }
            if (AUTH_TOKEN) {
              storage.setJWT(AUTH_TOKEN);
            }
            if (REFRESH_TOKEN) {
              storage.setRefreshJWT(REFRESH_TOKEN);
            }

            return reponse.json();
          })
          .then((data) => {
            resolve(data);
          })
          .catch((error) => reject(error));
      });
      return promise;
    },
    put: (path, payload) => {
      const promise = new Promise((resolve, reject) => {
        const url = `${baseURL}${path}`;
        core(url, "PUT", payload)
          .then((reponse) => reponse.json())
          .then((data) => {
            const ckie = data?.headers?.get("set-cookie");
            const AUTH_TOKEN = data?.headers?.map["x-auth-token"];
            const REFRESH_TOKEN = data?.headers?.map["x-refresh-token"];
            if (ckie) {
              storage.setSession(ckie);
            }
            if (AUTH_TOKEN) {
              storage.setJWT(AUTH_TOKEN);
            }
            if (REFRESH_TOKEN) {
              storage.setRefreshJWT(REFRESH_TOKEN);
            }
            resolve(data);
          })
          .catch((error) => reject(error));
      });
      return promise;
    },
    delete: (path) => {
      const promise = new Promise((resolve, reject) => {
        const url = `${baseURL}${path}`;
        core(url, "DELETE")
          .then((reponse) => reponse.json())
          .then((data) => {
            const ckie = data?.headers?.get("set-cookie");
            const AUTH_TOKEN = data?.headers?.map["x-auth-token"];
            const REFRESH_TOKEN = data?.headers?.map["x-refresh-token"];
            if (ckie) {
              storage.setSession(ckie);
            }
            if (AUTH_TOKEN) {
              storage.setJWT(AUTH_TOKEN);
            }
            if (REFRESH_TOKEN) {
              storage.setRefreshJWT(REFRESH_TOKEN);
            }
            resolve(data);
          })
          .catch((error) => reject(error));
      });
      return promise;
    },
    cancelRequest: () => {
      const oldcontroller = abortController.getInstance();
      oldcontroller.abort();
    },
  };
};

export default Api;
