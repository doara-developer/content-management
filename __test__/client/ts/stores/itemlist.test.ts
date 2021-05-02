import Vuex, { Store } from "vuex";
import { Item } from "@common/types";
import { itemList } from "@client/ts/stores/itemList";
import { createLocalVue } from "@vue/test-utils";
import { cloneDeep } from "lodash";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("store/count.js", () => {
    let store: any;
    beforeEach(() => {
        store = new Vuex.Store({
            modules: { itemList: cloneDeep(itemList) },
        });
    });
    describe("actions", () => {
        test("update", () => {
            const items: Item[] = [
                {
                    id: "1",
                    name: "dummyItem",
                },
            ];
            store.dispatch("itemList/update", items);
            expect(store.state.itemList.itemList.length).toBe(1);
        });
        test("add", () => {
            const item: Item = {
                id: "1",
                name: "dummyItem",
            };
            store.dispatch("itemList/add", item);
            expect(store.state.itemList.itemList.length).toBe(1);
        });
        test("add", () => {
            const items: Item[] = [
                {
                    id: "1",
                    name: "dummyItem",
                },
            ];
            store.state.itemList.itemList = items;
            store.dispatch("itemList/remove", "1");
            expect(store.state.itemList.itemList.length).toBe(0);
        });
    });
});
