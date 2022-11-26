import { createApp } from "vue";
// import { store } from './store';
import router from "./router";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

// app.use(store);
app.use(router); // 사용 설정 하기

app.mount("#app");
