import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import MainNavigation from "@client/components/organisms/MainNavigation.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("MainNavigation.vue", () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallowMount(MainNavigation, { localVue });
    });
    test("renders props.msg when passed", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
