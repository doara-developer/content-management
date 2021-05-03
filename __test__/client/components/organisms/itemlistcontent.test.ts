import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ItemListContent from "@client/components/organisms/ItemListContent.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("ItemListContent.vue", () => {
    test("renders props.msg when passed", () => {
        const wrapper = shallowMount(ItemListContent, { localVue });
        expect(wrapper).toMatchSnapshot();
    });
});
