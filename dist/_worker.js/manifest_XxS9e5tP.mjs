globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as decodeKey } from './chunks/astro/server_c-NwCXxl.mjs';
import './chunks/astro-designed-error-pages_868EhxXl.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_BDhk_D5j.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/pouya/Desktop/personal/articles/","cacheDir":"file:///Users/pouya/Desktop/personal/articles/node_modules/.astro/","outDir":"file:///Users/pouya/Desktop/personal/articles/dist/","srcDir":"file:///Users/pouya/Desktop/personal/articles/src/","publicDir":"file:///Users/pouya/Desktop/personal/articles/public/","buildClientDir":"file:///Users/pouya/Desktop/personal/articles/dist/","buildServerDir":"file:///Users/pouya/Desktop/personal/articles/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"humanoid/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/humanoid","isIndex":false,"type":"page","pattern":"^\\/humanoid\\/?$","segments":[[{"content":"humanoid","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/humanoid.astro","pathname":"/humanoid","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"llm-inference-configuration/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/llm-inference-configuration","isIndex":false,"type":"page","pattern":"^\\/llm-inference-configuration\\/?$","segments":[[{"content":"llm-inference-configuration","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/llm-inference-configuration.astro","pathname":"/llm-inference-configuration","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"lm-studio/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/lm-studio","isIndex":false,"type":"page","pattern":"^\\/lm-studio\\/?$","segments":[[{"content":"lm-studio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/lm-studio.astro","pathname":"/lm-studio","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"prompt/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/prompt","isIndex":false,"type":"page","pattern":"^\\/prompt\\/?$","segments":[[{"content":"prompt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/prompt.astro","pathname":"/prompt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/pouya/Desktop/personal/articles/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/pouya/Desktop/personal/articles/src/pages/humanoid.astro",{"propagation":"none","containsHead":true}],["/Users/pouya/Desktop/personal/articles/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/pouya/Desktop/personal/articles/src/pages/llm-inference-configuration.astro",{"propagation":"none","containsHead":true}],["/Users/pouya/Desktop/personal/articles/src/pages/lm-studio.astro",{"propagation":"none","containsHead":true}],["/Users/pouya/Desktop/personal/articles/src/pages/prompt.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/humanoid@_@astro":"pages/humanoid.astro.mjs","\u0000@astro-page:src/pages/llm-inference-configuration@_@astro":"pages/llm-inference-configuration.astro.mjs","\u0000@astro-page:src/pages/lm-studio@_@astro":"pages/lm-studio.astro.mjs","\u0000@astro-page:src/pages/prompt@_@astro":"pages/prompt.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_XxS9e5tP.mjs","/Users/pouya/Desktop/personal/articles/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/logo.C7PaCSgx.png","/robots.txt","/sitemap.xml","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/_noop-actions.mjs","/_worker.js/index.js","/_worker.js/renderers.mjs","/_worker.js/_astro/logo.C7PaCSgx.png","/_worker.js/pages/about.astro.mjs","/_worker.js/pages/humanoid.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/llm-inference-configuration.astro.mjs","/_worker.js/pages/lm-studio.astro.mjs","/_worker.js/pages/prompt.astro.mjs","/_worker.js/chunks/DumanLogo_llGPSEc3.mjs","/_worker.js/chunks/Head_DcKD6cEK.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_rk7_jBDB.mjs","/_worker.js/chunks/astro-designed-error-pages_868EhxXl.mjs","/_worker.js/chunks/astro_CNwYQSGt.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/index_Bry0KJbf.mjs","/_worker.js/chunks/noop-middleware_BDhk_D5j.mjs","/_worker.js/chunks/astro/server_c-NwCXxl.mjs","/about/index.html","/humanoid/index.html","/llm-inference-configuration/index.html","/lm-studio/index.html","/prompt/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"rK9tIg8hPN+bqOTz4ViKWUHX7RGRDN1lPdXGGVPrubM=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
