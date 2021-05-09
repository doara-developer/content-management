import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import DateForm from "@client/components/molecules/DateForm.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("DateForm.vue", () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallowMount(DateForm, { localVue });
    });
    test("renders props.msg when passed", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
