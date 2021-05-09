import { Module, GetterTree, MutationTree, ActionTree } from "vuex";
import {
    DialogState,
    RootState,
    DialogType,
    DialogTypeEnum,
    DialogDataType,
    EditFormDataType,
} from "@client/ts/stores/types";

const state: DialogState = {
    type: DialogTypeEnum.None,
    data: {},
};

const getters: GetterTree<DialogState, RootState> = {};

const mutations: MutationTree<DialogState> = {
    updateType: (state, type: DialogType) => {
        state.type = type;
    },
    updateData: (state, data: DialogDataType) => {
        state.data = data;
    },
};

const actions: ActionTree<DialogState, RootState> = {
    close: async ({ commit }) => {
        commit("updateType", DialogTypeEnum.None);
        commit("updateData", {});
    },
    openRegistrationForm: async ({ commit }) => {
        commit("updateType", DialogTypeEnum.RegistrationForm);
        commit("updateData", {});
    },
    openEditForm: async ({ commit }, data: EditFormDataType) => {
        commit("updateType", DialogTypeEnum.EditForm);
        commit("updateData", data);
    },
};

export const dialog: Module<DialogState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
