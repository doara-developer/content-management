import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ItemManagement from "@client/components/pages/ItemManagement.vue";
import { DialogTypeEnum } from "@client/ts/stores/types";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("ItemManagement.vue", () => {
    let store: any;
    beforeEach(() => {
        store = new Vuex.Store({
            state: {
                dialog: {
                    type: DialogTypeEnum.None,
                },
            },
            actions: {
                "itemList/update": jest.fn(),
            },
        });
    });
    test("renders props.msg when passed", () => {
        const wrapper = shallowMount(ItemManagement, { store, localVue });
        expect(wrapper).toMatchSnapshot();
    });
});
