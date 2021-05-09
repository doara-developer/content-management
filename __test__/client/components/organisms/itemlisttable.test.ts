import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { Item } from "@common/types";
import ItemListTable from "@client/components/organisms/ItemListTable.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("ItemListTable.vue", () => {
    let store: any;
    beforeEach(() => {
        const dummyItemList: Item[] = [
            {
                id: "123",
                name: "dummy_item",
                purchaseDate: "2021-05-21",
            },
        ];
        store = new Vuex.Store({
            state: {
                itemList: {
                    itemList: dummyItemList,
                },
            },
        });
    });
    test("renders props.msg when passed", () => {
        const wrapper = shallowMount(ItemListTable, { store, localVue });
        expect(wrapper).toMatchSnapshot();
    });
});
