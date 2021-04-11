import Vue from "vue";
import App from "@client/components/App.vue";
import "@client/scss/index.scss";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("fa-icon", FontAwesomeIcon);

new Vue({
    el: "#app",
    render: (h) => h(App),
});
