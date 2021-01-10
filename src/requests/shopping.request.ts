import {checkSchema} from 'express-validator';

export const validateCreateShopping = checkSchema({
  title: {
    isLength: {
      options: {
        min: 2
      },
      errorMessage: 'Title must be > 2',
    },
    exists: {
      errorMessage: 'Title must be not empty',
    },
  }
});
export const validateUpdateShopping = checkSchema({
  id: {
    in: ['params'],
    exists: {
      errorMessage: 'Id must be not empty',
    },
  },
  title: {
    in: ['body'],
    exists: {
      errorMessage: 'Title must be not empty',
    },
  }
});
export const validateDeleteShopping = checkSchema({
  id: {
    in: ['params'],
    exists: {
      errorMessage: 'Id must be not empty',
    },
  },
});
