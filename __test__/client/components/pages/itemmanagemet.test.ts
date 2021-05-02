import * as api from "@client/ts/api";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ItemManagement from "@client/components/pages/ItemManagement.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("ItemManagement.vue", () => {
    let store: any;
    beforeEach(() => {
        store = new Vuex.Store({
            state: {},
            actions: {
                "itemList/update": jest.fn(),
            },
        });
    });
    test("renders props.msg when passed", () => {
        jest.spyOn(api, "getItems").mockReturnValueOnce(
            Promise.resolve({
                item_list: [],
            })
        );
        const wrapper = shallowMount(ItemManagement, { store, localVue });
        expect(wrapper).toMatchSnapshot();
    });
});
