import { withAsyncContext, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "executive-orders",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/trump-stats", "$utWae6UaAA")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(pending)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center min-h-screen" }, _attrs))}><div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-900"></div></div>`);
      } else if (unref(error)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"> Failed to load data. Please try again later. </div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><h1 class="text-4xl font-bold mb-8">Executive Orders &amp; Actions</h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`);
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
          title: "Supreme Court Impact",
          value: unref(data).executiveActions.supremeCourt.value,
          description: unref(data).executiveActions.supremeCourt.description,
          source: unref(data).executiveActions.supremeCourt.source
        }, null, _parent));
        _push(`</div><div class="bg-white p-6 rounded-lg shadow-md"><h2 class="text-2xl font-bold mb-4">Key Executive Orders</h2><div class="space-y-4"><div class="border-l-4 border-blue-600 pl-4"><h3 class="font-semibold">Immigration and Border Security</h3><p>Executive Order 13767: Border Security and Immigration Enforcement Improvements</p><p class="text-sm text-gray-600">Initiated the construction of the border wall and increased border security measures.</p></div><div class="border-l-4 border-blue-600 pl-4"><h3 class="font-semibold">Trade and Economic Policy</h3><p>Executive Order 13765: Minimizing the Economic Burden of the Patient Protection and Affordable Care Act</p><p class="text-sm text-gray-600">Began the process of repealing and replacing the Affordable Care Act.</p></div><div class="border-l-4 border-blue-600 pl-4"><h3 class="font-semibold">Regulatory Reform</h3><p>Executive Order 13771: Reducing Regulation and Controlling Regulatory Costs</p><p class="text-sm text-gray-600">Required two existing regulations to be eliminated for every new regulation issued.</p></div></div></div></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/executive-orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=executive-orders--G7zkgqH.mjs.map
