import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faUserTie,
  faBabyCarriage,
  faHiking,
  faRocket,
  faCrown,
  faChevronUp,
  faChevronDown,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// library.add(faCrown);
library.add([
  faSearch,
  faUserTie,
  faBabyCarriage,
  faHiking,
  faRocket,
  faCrown,
  faChevronUp,
  faChevronDown,
  faUserTimes,
]);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
