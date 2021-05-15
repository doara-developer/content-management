import Vuex, { Store } from "vuex";
import * as api from "@client/ts/api";
import { Item, CheckedStatusEnum } from "@common/types";
import { itemList } from "@client/ts/stores/itemList";
import { createLocalVue } from "@vue/test-utils";
import { cloneDeep } from "lodash";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("store/itemList.ts", () => {
    let store: any;
    beforeEach(() => {
        store = new Vuex.Store({
            modules: { itemList: cloneDeep(itemList) },
        });
    });
    describe("actions", () => {
        test("update", async () => {
            const items: Item[] = [
                {
                    id: "1",
                    status: CheckedStatusEnum.None,
                    name: "dummyItem",
                    purchaseDate: "2021-05-21",
                },
            ];
            jest.spyOn(api, "getItems").mockReturnValueOnce(
                Promise.resolve({
                    item_list: items,
                })
            );
            await store.dispatch("itemList/update");
            expect(store.state.itemList.itemList.length).toBe(1);
        });
        test("add", () => {
            const item: Item = {
                id: "1",
                status: CheckedStatusEnum.Checked,
                name: "dummyItem",
                purchaseDate: "2021-05-21",
            };
            store.dispatch("itemList/add", item);
            expect(store.state.itemList.itemList.length).toBe(1);
        });
        test("remove", () => {
            const items: Item[] = [
                {
                    id: "1",
                    status: CheckedStatusEnum.Must,
                    name: "dummyItem",
                    purchaseDate: "2021-05-21",
                },
            ];
            store.state.itemList.itemList = items;
            store.dispatch("itemList/remove", "1");
            expect(store.state.itemList.itemList.length).toBe(0);
        });
    });
});
