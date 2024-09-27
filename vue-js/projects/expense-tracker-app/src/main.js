import "./assets/main.css";
import Toast from "vue-toast-notification";
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-bootstrap.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.use(Toast);
app.mount("#app");
