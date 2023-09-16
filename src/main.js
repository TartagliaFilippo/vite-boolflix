import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
