import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router/routes";
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(routes).mount("#app");
