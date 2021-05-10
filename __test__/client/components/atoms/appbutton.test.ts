import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import AppButton from "@client/components/atoms/AppButton.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("AppButton.vue", () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallowMount(AppButton, {
            localVue,
            slots: { default: "test" },
        });
    });
    test("renders props.msg when passed", () => {
        expect(wrapper).toMatchSnapshot();
    });
    test("click()", () => {
        wrapper.vm.click();
        expect(wrapper.emitted("click")).toBeTruthy();
    });
});
