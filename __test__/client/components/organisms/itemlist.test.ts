import { shallowMount } from "@vue/test-utils";
import MainNavigation from "@client/components/organisms/MainNavigation.vue";

describe("MainNavigation.vue", () => {
    test("renders props.msg when passed", () => {
        const wrapper = shallowMount(MainNavigation);
        expect(wrapper).toMatchSnapshot();
    });
});
