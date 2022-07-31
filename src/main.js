// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from "vuex";
import jQuery from "jquery";

import store from "./store";

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/styles/main.scss";

if (process.isClient) {
  window.jQuery = jQuery;
  window.$ = jQuery;
}

export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(Vuex);

  appOptions.store = new Vuex.Store(store);

  head.meta.push({
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, user-scalable=no"
  });
}
