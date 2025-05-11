globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CfAiusuQ.mjs';
import { manifest } from './manifest_CVYJi0l7.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/humanoid.astro.mjs');
const _page1 = () => import('./pages/llm-inference-configuration.astro.mjs');
const _page2 = () => import('./pages/lm-studio.astro.mjs');
const _page3 = () => import('./pages/prompt.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/humanoid.astro", _page0],
    ["src/pages/llm-inference-configuration.astro", _page1],
    ["src/pages/lm-studio.astro", _page2],
    ["src/pages/prompt.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
