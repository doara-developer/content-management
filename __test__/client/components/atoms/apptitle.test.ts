import { shallowMount } from "@vue/test-utils";
import AppHeader from "@client/components/organisms/AppHeader.vue";

describe("AppHeader.vue", () => {
    test("renders props.msg when passed", () => {
        const wrapper = shallowMount(AppHeader);
        expect(wrapper).toMatchSnapshot();
    });
});
