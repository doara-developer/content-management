import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { itemList } from "./itemList";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: "1.0.0",
    },
    modules: {
        itemList,
    },
};

export default new Vuex.Store<RootState>(store);
