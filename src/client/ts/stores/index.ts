import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { itemList } from "./itemList";
import { dialog } from "./dialog";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: "1.0.0",
    },
    modules: {
        itemList,
        dialog,
    },
};

export default new Vuex.Store<RootState>(store);
