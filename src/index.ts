export * as Utils from './utils';

export const returnHelloWorld = () => `Hello World`;

let secretKey = '';

export const init = (key: string) => {
  secretKey = key;
};
export const getKey = () => secretKey;
