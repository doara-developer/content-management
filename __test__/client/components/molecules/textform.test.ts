import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import TextForm from "@client/components/molecules/TextForm.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("TextForm.vue", () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallowMount(TextForm, { localVue });
    });
    test("renders props.msg when passed", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
