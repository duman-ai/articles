globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_B_68l3EY.mjs';
import './chunks/astro/server_Du6K7TrS.mjs';
import { s as sequence } from './chunks/index_8GIoQLgM.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
