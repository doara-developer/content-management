import { shallowMount } from "@vue/test-utils";
import ItemList from "@client/components/organisms/ItemList.vue";

describe("ItemList.vue", () => {
    test("renders props.msg when passed", () => {
        const wrapper = shallowMount(ItemList);
        expect(wrapper).toMatchSnapshot();
    });
});
