import { shallowMount } from "@vue/test-utils";
import AppButton from "@client/components/atoms/AppButton.vue";

describe("AppButton.vue", () => {
    test("renders props.msg when passed", () => {
        const wrapper = shallowMount(AppButton);
        expect(wrapper).toMatchSnapshot();
    });
});
