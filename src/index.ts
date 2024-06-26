import * as Utils from './utils';

const returnHelloWorld = () => `Hello World`;

let secretKey = '';

const init = (key: string) => {
  secretKey = key;
};
const getKey = () => secretKey;

export default {
  Utils,
  returnHelloWorld,
  init,
  getKey,
};
