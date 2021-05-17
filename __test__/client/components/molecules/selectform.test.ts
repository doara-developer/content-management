import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import SelectForm from "@client/components/molecules/SelectForm.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("SelectForm.vue", () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallowMount(SelectForm, { localVue });
    });
    test("renders props.msg when passed", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
