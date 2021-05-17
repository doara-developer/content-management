import { shallowMount } from "@vue/test-utils";
import Select from "@client/components/atoms/Select.vue";

describe("Select.vue", () => {
    test("renders props.msg when passed", () => {
        const wrapper = shallowMount(Select);
        expect(wrapper).toMatchSnapshot();
    });
});
