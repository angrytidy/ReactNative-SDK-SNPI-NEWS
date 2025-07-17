/**
 * Copyright (c) Flexi Apps.
 *
 * Function to handle errors
 * Errors will be log in console in dev and sent to sentry server in prod
 */

export default function reportError(from, error) {
  if (process.env.NODE_ENV === 'development') {
    console.log(from, error);
  } else {
   //todo: rollbar
  }
}
