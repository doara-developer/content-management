import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import RegistrationForm from "@client/components/organisms/RegistrationForm.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("RegistrationForm.vue", () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallowMount(RegistrationForm, { localVue });
    });
    test("renders props.msg when passed", () => {
        expect(wrapper).toMatchSnapshot();
    });
    test("close()", () => {
        wrapper.vm.close();
        expect(wrapper.emitted("close")).toBeTruthy();
    });
    test("changeName()", () => {
        const dummyName = "dummyName";
        wrapper.vm.changeName(dummyName);
        expect(wrapper.vm.name).toBe(dummyName);
    });
    test("changePurchaseDate()", () => {
        const dummyDate = "2021-05-21";
        wrapper.vm.changePurchaseDate(dummyDate);
        expect(wrapper.vm.purchaseDate).toBe(dummyDate);
    });
});
