import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import AppTextArea from "@client/components/atoms/AppTextArea.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("AppTextArea.vue", () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallowMount(AppTextArea, { localVue });
    });
    test("renders props.msg when passed", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
