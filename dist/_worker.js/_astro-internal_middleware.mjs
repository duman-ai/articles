globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_868EhxXl.mjs';
import './chunks/astro/server_c-NwCXxl.mjs';
import { s as sequence } from './chunks/index_Bry0KJbf.mjs';

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
