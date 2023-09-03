import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';

export const toCamelCase = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map((v) => toCamelCase(v));
  }
  if (obj !== null && obj?.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: toCamelCase(obj[key]),
      }),
      {},
    );
  }
  return obj;
};

export const toSnakeCase = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map((v) => toSnakeCase(v));
  }
  if (obj !== null && obj?.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [snakeCase(key)]: toSnakeCase(obj[key]),
      }),
      {},
    );
  }
  return obj;
};
