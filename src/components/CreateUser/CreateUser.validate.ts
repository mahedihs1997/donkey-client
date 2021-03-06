import { FormikErrors } from 'formik';

import { UserValues } from './CreateUser.models';

export const validateCreateUser = (values: UserValues) => {
  const errors: FormikErrors<UserValues> = {};
  if (!values.username) {
    errors.username = 'Username is required';
  }

  if (!values.password) {
    errors.password = 'Enter a password';
  }

  if (!values.name) {
    errors.name = 'Enter a name';
  }

  if (!values.role) {
    errors.role = 'Enter a role';
  }

  if (!values.rate) {
    errors.rate = 'Enter a rate';
  }

  return errors;
};
