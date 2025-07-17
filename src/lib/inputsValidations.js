import {isUndefined} from 'lodash';
import validate from 'validate.js';

const emailConstraints = {
  from: {
    email: true,
  },
};

// const phonePattern = /^\d{9}$/;
const phonePattern = /[0-9]{8,11}$/;
const phoneConstraints = {
  phone: {
    format: {
      pattern: phonePattern,
      flags: 'i',
      message: 'must have 8 or 9 numbers, letters or special characters',
    },
  },
};

const namePattern = /^[A-Za-z]+$/;
const usernameConstraints = {
  phone: {
    format: {
      pattern: namePattern,
      flags: 'i',
      message: 'must not includes numbers',
    },
  },
};

const inputValidation = (type, value) => {
  switch (type) {
    case 'email':
      return isUndefined(validate({from: value}, emailConstraints));

    case 'password':
      return value.length >= 6;

    case 'username':
      return isUndefined(validate({username: value}, usernameConstraints));

    case 'phone':
      return isUndefined(validate({phone: value}, phoneConstraints));

    default:
      return true;
  }
};

export default inputValidation;
