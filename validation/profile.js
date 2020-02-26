const validator = require('validator');
const isEmpty = require('./is-empty');
const keys = require('../config/keys');

module.exports = function validateProfileInput(data) {
 let errors = {};
 const handleMinChar = keys.profileHandleMinChar;
 const handleMaxChar = keys.profileHandleMaxChar;

 data.handle = !isEmpty(data.handle) ? data.handle : '';
 data.status = !isEmpty(data.status) ? data.status : '';
 data.skills = !isEmpty(data.skills) ? data.skills : '';

 if (!validator.isLength(data.handle, { min: handleMinChar, max: handleMaxChar })) {
  errors.handle = 'Handle needs to be between ' + handleMinChar + ' and ' + handleMaxChar + ' characters';
 }

 if (validator.isEmpty(data.handle)) {
  errors.handle = 'Profile handle is required';
 }

 if (validator.isEmpty(data.status)) {
  errors.status = 'Status field is required';
 }

 if (validator.isEmpty(data.skills)) {
  errors.skills = 'Skills field is required';
 }

 if (!isEmpty(data.website)) {
  if (!validator.isURL(data.website)) {
   errors.website = 'Not a valid URL';
  }
 }

 if (!isEmpty(data.youtube)) {
  if (!validator.isURL(data.youtube)) {
   errors.youtube = 'Not a valid URL';
  }
 }

 if (!isEmpty(data.twitter)) {
  if (!validator.isURL(data.twitter)) {
   errors.twitter = 'Not a valid URL';
  }
 }

 if (!isEmpty(data.facebook)) {
  if (!validator.isURL(data.facebook)) {
   errors.facebook = 'Not a valid URL';
  }
 }

 if (!isEmpty(data.linkedin)) {
  if (!validator.isURL(data.linkedin)) {
   errors.linkedin = 'Not a valid URL';
  }
 }

 if (!isEmpty(data.instagram)) {
  if (!validator.isURL(data.instagram)) {
   errors.instagram = 'Not a valid URL';
  }
 }

 return {
  errors,
  isValid: isEmpty(errors)
 }
}