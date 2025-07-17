#!/usr/bin/env node

"use strict";
// var cheerio = require('cheerio');
var fs = require("fs");
var path = require("path");

const appName = require("../../package.json").name;

const options = require("minimist")(process.argv.slice(2));
const commands = options._;

if (commands.length === 0) {
  printErrorAndExit("default");
} else {
  switch (commands[0]) {
    case "api":
      apiConfig(options.value);
      break;
    case "authType":
      authTypeConfig(options.value);
      break;
    case "hasSocial":
      withSocial(options.value);
      break;
    case "facebook":
      fbIDConfig(options.id, options.name);
      break;
    case "oauthScheme":
      oauthScheme(options.value);
      break;
    case "appcenterKeys":
      appcenterKeys(options.android, options.ios);
      break;
    case "codepushKey":
      codePushKeys(options.platform, options.staging, options.production);
      break;
    case "googleApiKey":
      googleApiKey(options.value);
      break;
    case "fonts":
      fontsConfig(options.value, options.level);
      break;
    case "colors":
      colorsConfig(options.value, options.level);
      break;
    default:
      printErrorAndExit("not_supported");
  }
}

async function apiConfig(uri) {
  try {
    const apiConfigPath = path.join(process.cwd(), "src", "config", "api.js");

    // read config file content
    const contentBin = await readFile(apiConfigPath);
    const content = contentBin.toString();

    // set api url by replacing file content
    const newContent = content
      .replace("API_BASE_URL: '',", `API_BASE_URL: ${"'" + uri + "/api'"},`)
      .replace("BASE_URL: '',", `BASE_URL: ${"'" + uri + "'"},`);

    // write new content to file
    fs.writeFileSync(apiConfigPath, newContent);
  } catch {
    // maybe exit the process
  }
}


async function authTypeConfig(value) {
  try {
    const configPath = path.join(process.cwd(), "src", "config", "app.js");

    // read config file content
    const contentBin = await readFile(configPath);
    const content = contentBin.toString();

    // set api url by replacing file content
    const newContent = content.replace(
      "const AUTHENTICATION_TYPE = none",
      `const AUTHENTICATION_TYPE = ${value}`
    );

    // write new content to file
    fs.writeFileSync(configPath, newContent);
  } catch {
    // maybe exit the process
  }
}

async function withSocial(value) {
  try {
    const configPath = path.join(process.cwd(), "src", "config", "app.js");

    // read config file content
    const contentBin = await readFile(configPath);
    const content = contentBin.toString();

    // set api url by replacing file content
    const newContent = content.replace(
      "const WITH_SOCIAL = false",
      `const WITH_SOCIAL = ${value}`
    );

    // write new content to file
    fs.writeFileSync(configPath, newContent);
  } catch {
    // maybe exit the process
  }
}

async function fbIDConfig(appId, fbAppName) {
  try {
    // ANDROID CONFIG
    const stringXml = path.join(
      process.cwd(),
      "android/app/src/main/res/values/strings.xml"
    );
    const contentBin = await readFile(stringXml);
    const content = contentBin.toString();

    const newContent = content
      .replace(
        '<string name="facebook_app_id"></string>',
        `<string name="facebook_app_id">${appId}</string>`
      )
      .replace(
        '<string name="fb_login_protocol_scheme"></string>',
        `<string name="fb_login_protocol_scheme">fb${appId}</string>`
      );

    // IOS CONFIG
    const infoPlist = path.join(process.cwd(), `ios/${appName}/Info.plist`);
    const plistBin = await readFile(infoPlist);
    const plistContent = plistBin.toString();

    const newPlist = plistContent
      .replace("<string>{your-fb-appid}</string>", `<string>${appId}</string>`)
      .replace(
        "<string>{your-fb-appName}</string>",
        `<string>${fbAppName}</string>`
      )
      .replace(
        "<string>{your-fb-url-scheme}</string>",
        `<string>fb${appId}</string>`
      );

    // write new content to file
    fs.writeFileSync(infoPlist, newPlist);
    // write new content to file
    fs.writeFileSync(stringXml, newContent);

    console.log("Configure Facebook app Id and Name success");
  } catch {}
}

async function oauthScheme(scheme) {
  try {
    // ANDROID CONFIG
    const stringXml = path.join(
      process.cwd(),
      "android/app/src/main/AndroidManifest.xml"
    );
    const contentBin = await readFile(stringXml);
    const content = contentBin.toString();

    const newContent = content.replace(
      '<data android:scheme="" android:host="login" />',
      `<data android:scheme="${scheme}" android:host="login" />`
    );

    // IOS CONFIG
    const infoPlist = path.join(process.cwd(), `ios/${appName}/Info.plist`);
    const plistBin = await readFile(infoPlist);
    const plistContent = plistBin.toString();

    const newPlist = plistContent.replace(
      "<string>{your-app-open-scheme}</string>",
      `<string>${scheme}</string>`
    );

    // write new content to file
    fs.writeFileSync(infoPlist, newPlist);
    // write new content to file
    fs.writeFileSync(stringXml, newContent);

    console.log("Configure OAuth scheme success");
  } catch {}
}

async function appcenterKeys(androidK, iosK) {
  try {
    // ANDROID CONFIG
    const stringXml = path.join(
      process.cwd(),
      "android/app/src/main/assets/appcenter-config.json"
    );
    const contentBin = await readFile(stringXml);
    const content = contentBin.toString();

    const newContent = content.replace(
      '"app_secret": ""',
      `"app_secret": "${androidK}"`
    );

    // IOS CONFIG
    const infoPlist = path.join(
      process.cwd(),
      `ios/${appName}/AppCenter-Config.plist`
    );
    const plistBin = await readFile(infoPlist);
    const plistContent = plistBin.toString();

    const newPlist = plistContent.replace(
      "<string>{your-app-secret}</string>",
      `<string>${iosK}</string>`
    );

    // write new content to file
    fs.writeFileSync(infoPlist, newPlist);
    // write new content to file
    fs.writeFileSync(stringXml, newContent);
  } catch {}
}

async function codePushKeys(platform, staging, production) {
  if (platform === "android") {
    try {
      const gradleFile = path.join(process.cwd(), "android/gradle.properties");
      const contentBin = await readFile(gradleFile);
      const content = contentBin.toString();

      const newContent = content
        .replace(
          "CODEPUSH_KEY_STAGING='\"\"'",
          `CODEPUSH_KEY_STAGING='"${staging}"'`
        )
        .replace(
          "CODEPUSH_KEY_PRODUCTION='\"\"'",
          `CODEPUSH_KEY_PRODUCTION='"${production}"'`
        );

      // write new content to file
      fs.writeFileSync(gradleFile, newContent);
    } catch {}
  }
}

async function googleApiKey(key) {
  try {
    const manifestXml = path.join(
      process.cwd(),
      "android/app/src/main/AndroidManifest.xml"
    );
    const contentBin = await readFile(manifestXml);
    const content = contentBin.toString();

    const newContent = content.replace(
      'android:value="your-google-api-key">',
      `android:value="${key}"`
    );

    // write new content to file
    fs.writeFileSync(manifestXml, newContent);
  } catch {}
}

function fontName(level) {
  //TODO : handle others fonts
  switch (level) {
    case 0:
      return "primaryFont";
    case 1:
      return "secondaryFont";
    case 2:
      return "paragraphFont";
    default:
      return "otherFont";
  }
}

async function fontsConfig(font, level) {
  const stylesFile = path.join(
    process.cwd(),
    "src",
    "common",
    "styles",
    "index.js"
  );

  const contentBin = await readFile(stylesFile);
  const content = contentBin.toString();

  const name = fontName(level);

  const newContent = content.replace(`${name}:''`, `${name}:'${font}'`);

  // write new content to file
  fs.writeFileSync(stylesFile, newContent);
}

async function colorsConfig(color, level) {
  const colorsFile = path.join(
    process.cwd(),
    "src",
    "common",
    "colors",
    "index.js"
  );

  const contentBin = await readFile(colorsFile);
  const content = contentBin.toString();

  const colorJSON = JSON.parse(color);

  const newContent = content.replace(
    `${Object.keys(colorJSON)[0]}:''`,
    `${Object.keys(colorJSON)[0]}:${Object.values(colorJSON)[0]}`
  );

  // write new content to file
  fs.writeFileSync(colorsFile, newContent);
}

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

function printErrorAndExit(error) {
  //TODO display message base on error type
  console.log("Please sepcify one or more configs to generate");
  process.exit();
}
