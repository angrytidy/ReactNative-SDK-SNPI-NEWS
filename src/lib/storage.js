/**
 * Copyright (c) Flexi Apps.
 *
 * Functions to save and retrieve datas from AsyncStorage
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import reportError from "../lib/errorHandler";

const appName = require("../../package.json").name;
function getPermissions() {
  var promise = new Promise(async (resolve, reject) => {
    try {
      const result_session = await AsyncStorage.getItem(
        `@fl${appName.toLowerCase()}` + ":session"
      );
      const result_jwt = await AsyncStorage.getItem(
        `@fl${appName.toLowerCase()}` + ":jwt"
      );
      const result_refresh = await AsyncStorage.getItem(
        `@fl${appName.toLowerCase()}` + ":refresh"
      );
      let vrb = { result_session, result_jwt, result_refresh };
      resolve(vrb);
    } catch (error) {
      reportError("get permission error", error);
      reject(error);
    }
  });
  return promise;
}
// Session space
function getSession() {
  var promise = new Promise(async (resolve, reject) => {
    try {
      const result = await AsyncStorage.getItem(
        `@fl${appName.toLowerCase()}` + ":session"
      );
      resolve(result);
    } catch (error) {
      reportError("get session error", error);
      reject(error);
    }
  });
  return promise;
}
function setSession(session) {
  var promise = new Promise((resolve) => {
    try {
      AsyncStorage.setItem(`@fl${appName.toLowerCase()}` + ":session", session);
      resolve();
    } catch (error) {
      reportError("set session error", error);
    }
  });

  return promise;
}
function clearSession() {
  var promise = new Promise((resolve, reject) => {
    try {
      AsyncStorage.removeItem(`@fl${appName.toLowerCase()}` + ":session");
      resolve();
    } catch (error) {
      reportError("remove session error", error);
      reject(error);
    }
  });

  return promise;
}

// Token space
function getJWT() {
  var promise = new Promise(async (resolve, reject) => {
    try {
      const result = await AsyncStorage.getItem(
        `@fl${appName.toLowerCase()}` + ":jwt"
      );
      resolve(result);
    } catch (error) {
      reportError("get token error", error);
      reject(error);
    }
  });
  return promise;
}
function setJWT(jwt) {
  var promise = new Promise((resolve) => {
    try {
      AsyncStorage.setItem(`@fl${appName.toLowerCase()}` + ":jwt", jwt);
      resolve();
    } catch (error) {
      reportError("set jwt error", error);
    }
  });

  return promise;
}
function clearJWT() {
  var promise = new Promise((resolve, reject) => {
    try {
      AsyncStorage.removeItem(`@fl${appName.toLowerCase()}` + ":jwt");
      resolve();
    } catch (error) {
      reportError("remove jwt error", error);
      reject(error);
    }
  });

  return promise;
}
/****************** */
function getRefreshJWT() {
  var promise = new Promise(async (resolve, reject) => {
    try {
      const result = await AsyncStorage.getItem(
        `@fl${appName.toLowerCase()}` + ":refresh"
      );
      resolve(result);
    } catch (error) {
      reportError("get refresh token error", error);
      reject(error);
    }
  });
  return promise;
}
function setRefreshJWT(refresh) {
  var promise = new Promise((resolve) => {
    try {
      AsyncStorage.setItem(`@fl${appName.toLowerCase()}` + ":refresh", refresh);
      resolve();
    } catch (error) {
      reportError("set refresh token error", error);
    }
  });

  return promise;
}
function clearRefreshJWT() {
  var promise = new Promise((resolve, reject) => {
    try {
      AsyncStorage.removeItem(`@fl${appName.toLowerCase()}` + ":refresh");
      resolve();
    } catch (error) {
      reportError("remove refresh token error", error);
      reject(error);
    }
  });

  return promise;
}

// already in
function getAlreadyIn() {
  var promise = new Promise(async (resolve, reject) => {
    try {
      const result = await AsyncStorage.getItem(
        `@fl${appName.toLowerCase()}` + ":alreadyIn"
      );
      resolve(result);
    } catch (error) {
      reportError("get already in error", error);
      reject(error);
    }
  });
  return promise;
}

function setAlreadyIn(already) {
  var promise = new Promise((resolve, reject) => {
    try {
      AsyncStorage.setItem(
        `@fl${appName.toLowerCase()}` + ":alreadyIn",
        already
      );
      resolve();
    } catch (error) {
      reportError("set already in error", error);
      reject(error);
    }
  });

  return promise;
}

// SMS space
function getSmsCode() {
  var promise = new Promise(async (resolve, reject) => {
    try {
      const result = await AsyncStorage.getItem("@zenobeecreator:smscode");
      resolve(result);
    } catch (error) {
      reportError("get already in error", error);
      reject(error);
    }
  });
  return promise;
}

function setSmsCode(code) {
  var promise = new Promise((resolve, reject) => {
    try {
      AsyncStorage.setItem("@zenobeecreator:smscode", code);
      resolve();
    } catch (error) {
      reportError("set already in error", error);
      reject(error);
    }
  });

  return promise;
}

function clearSmsCode() {
  var promise = new Promise((resolve, reject) => {
    try {
      AsyncStorage.removeItem("@zenobeecreator:smscode");
      resolve();
    } catch (error) {
      reportError("remove code error", error);
      reject(error);
    }
  });

  return promise;
}

export default {
  getPermissions,

  getSession,
  setSession,
  clearSession,

  getRefreshJWT,
  setRefreshJWT,
  clearRefreshJWT,

  setJWT,
  getJWT,
  clearJWT,

  getAlreadyIn,
  setAlreadyIn,

  getSmsCode,
  setSmsCode,
  clearSmsCode,
};
