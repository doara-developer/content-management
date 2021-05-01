import Vue from "vue";
import App from "@client/components/App.vue";
import "@client/scss/index.scss";
import store from "@client/ts/stores";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("fa-icon", FontAwesomeIcon);

new Vue({
    el: "#app",
    store,
    render: (h) => h(App),
});
