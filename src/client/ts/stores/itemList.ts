import { Module, GetterTree, MutationTree, ActionTree } from "vuex";
import { ItemListState, RootState } from "@client/ts/stores/types";
import { Item } from "@common/types";

const state: ItemListState = {
    itemList: [],
};

const getters: GetterTree<ItemListState, RootState> = {};

const mutations: MutationTree<ItemListState> = {
    update: (state, itemList: Item[]) => {
        state.itemList = itemList;
    },
    add: (state, item: Item) => {
        state.itemList.push(item);
    },
    remove: (state, id: string) => {
        state.itemList = state.itemList.filter((e: Item) => e.id !== id);
    },
};

const actions: ActionTree<ItemListState, RootState> = {
    update: async ({ commit }, itemList: Item[]) => {
        commit("update", itemList);
    },
    add: async ({ commit }, item: Item) => {
        commit("add", item);
    },
    remove: async ({ commit }, id: string) => {
        commit("remove", id);
    },
};

export const itemList: Module<ItemListState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
