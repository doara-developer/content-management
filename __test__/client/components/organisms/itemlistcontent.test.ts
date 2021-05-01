import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { Item } from "@client/ts/stores/types";
import ItemListContent from "@client/components/organisms/ItemListContent.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("ItemListContent.vue", () => {
    let store: any;
    beforeEach(() => {
        const dummyItemList: Item[] = [
            {
                id: "123",
                name: "dummy_item",
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
        const wrapper = shallowMount(ItemListContent, { store, localVue });
        expect(wrapper).toMatchSnapshot();
    });
});
