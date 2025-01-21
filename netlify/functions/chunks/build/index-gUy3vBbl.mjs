import { withAsyncContext, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch, _ as _sfc_main$1 } from './fetch-C2sazESI.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/trump-stats", "$PslAyef5YX")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(pending)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center min-h-screen" }, _attrs))}><div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-900"></div></div>`);
      } else if (unref(error)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"> Failed to load data. Please try again later. </div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><section><h2 class="text-3xl font-bold mb-6">Economic Indicators (2017-2021)</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          title: "GDP Growth",
          value: unref(data).economic.gdp.value,
          description: unref(data).economic.gdp.description,
          source: unref(data).economic.gdp.source
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$1, {
          title: "Unemployment Rate",
          value: unref(data).economic.unemployment.value,
          description: unref(data).economic.unemployment.description,
          source: unref(data).economic.unemployment.source
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$1, {
          title: "Stock Market Growth",
          value: unref(data).economic.stockMarket.value,
          description: unref(data).economic.stockMarket.description,
          source: unref(data).economic.stockMarket.source
        }, null, _parent));
        _push(`</div></section><section><h2 class="text-3xl font-bold mb-6">Executive Actions</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          title: "Executive Orders",
          value: unref(data).executiveActions.orders.value,
          description: unref(data).executiveActions.orders.description,
          source: unref(data).executiveActions.orders.source
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$1, {
          title: "Major Deregulations",
          value: unref(data).executiveActions.deregulations.value,
          description: unref(data).executiveActions.deregulations.description,
          source: unref(data).executiveActions.deregulations.source
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$1, {
          title: "Supreme Court Appointments",
          value: unref(data).executiveActions.supremeCourt.value,
          description: unref(data).executiveActions.supremeCourt.description,
          source: unref(data).executiveActions.supremeCourt.source
        }, null, _parent));
        _push(`</div></section><section><h2 class="text-3xl font-bold mb-6">Notable Policy Actions</h2><div class="grid grid-cols-1 gap-6"><div class="bg-white p-6 rounded-lg shadow-md"><h3 class="text-xl font-semibold mb-4">Major Legislative Achievements</h3><ul class="list-disc ml-6 space-y-2"><!--[-->`);
        ssrRenderList(unref(data).legislation, (item) => {
          _push(`<li>${ssrInterpolate(item.title)} - ${ssrInterpolate(item.description)} <span class="text-xs text-gray-500 block">Source: ${ssrInterpolate(item.source)}</span></li>`);
        });
        _push(`<!--]--></ul></div></div></section><section><h2 class="text-3xl font-bold mb-6">Notable Public Statements</h2><div class="grid grid-cols-1 gap-6"><div class="bg-white p-6 rounded-lg shadow-md"><h3 class="text-xl font-semibold mb-4">Significant Quotes</h3><div class="space-y-4"><!--[-->`);
        ssrRenderList(unref(data).quotes, (quote) => {
          _push(`<div class="border-l-4 border-blue-600 pl-4"><p class="italic">&quot;${ssrInterpolate(quote.text)}&quot;</p><p class="text-sm text-gray-600">- ${ssrInterpolate(quote.date)} (${ssrInterpolate(quote.context)})</p><p class="text-xs text-gray-500">Source: ${ssrInterpolate(quote.source)}</p></div>`);
        });
        _push(`<!--]--></div></div></div></section></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-gUy3vBbl.mjs.map
