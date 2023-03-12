import { createApp } from "vue";
import App from "@/App.vue";

import "@/assets/main.scss";
import "@/cssprops.js";
import hljs from "@/hljs.js";
import router from "@/router/index.js";

createApp(App).use(router).use(hljs).mount("#app");
