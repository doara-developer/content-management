import Vuex from "vuex";
import { DialogTypeEnum } from "@client/ts/stores/types";
import { Item, CheckedStatusEnum } from "@common/types";
import { dialog } from "@client/ts/stores/dialog";
import { createLocalVue } from "@vue/test-utils";
import { cloneDeep } from "lodash";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("store/dialog.ts", () => {
    let store: any;
    beforeEach(() => {
        store = new Vuex.Store({
            modules: { dialog: cloneDeep(dialog) },
        });
    });
    describe("actions", () => {
        test("close", () => {
            store.dispatch("dialog/close");
            expect(store.state.dialog.type).toBe(DialogTypeEnum.None);
            expect(!Object.keys(store.state.dialog.data).length).toBeTruthy();
        });
        test("openRegistrationForm", () => {
            store.dispatch("dialog/openRegistrationForm");
            expect(store.state.dialog.type).toBe(
                DialogTypeEnum.RegistrationForm
            );
            expect(!Object.keys(store.state.dialog.data).length).toBeTruthy();
        });
        test("openEditForm", () => {
            const item: Item = {
                id: "1",
                status: CheckedStatusEnum.None,
                name: "dummyItem",
                purchaseDate: "2021-05-21",
            };
            store.dispatch("dialog/openEditForm", { item });
            expect(store.state.dialog.type).toBe(DialogTypeEnum.EditForm);
            expect(store.state.dialog.data.item).toBe(item);
        });
    });
});
