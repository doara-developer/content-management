import { shallowMount } from "@vue/test-utils";
import ItemListContent from "@client/components/organisms/ItemListContent.vue";

describe("ItemListContent.vue", () => {
    test("renders props.msg when passed", () => {
        const wrapper = shallowMount(ItemListContent);
        expect(wrapper).toMatchSnapshot();
    });
});
