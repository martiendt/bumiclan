import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./index.css";
import { createPinia } from "pinia";
import "vue-loading-overlay/dist/vue-loading.css";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
