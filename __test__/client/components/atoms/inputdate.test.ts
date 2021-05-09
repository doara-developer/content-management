import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import InputDate from "@client/components/atoms/InputDate.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("InputDate.vue", () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallowMount(InputDate, { localVue });
    });
    test("renders props.msg when passed", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
