import { shallowMount } from "@vue/test-utils";
import ItemManagement from "@client/components/pages/ItemManagement.vue";

describe("ItemManagement.vue", () => {
    test("renders props.msg when passed", () => {
        const wrapper = shallowMount(ItemManagement);
    });
});
