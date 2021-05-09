import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import EditForm from "@client/components/organisms/EditForm.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("EditForm.vue", () => {
    let wrapper: any;
    beforeEach(() => {
        const store = new Vuex.Store({
            state: {},
            actions: {
                "itemList/update": jest.fn(),
                "dialog/close": jest.fn(),
            },
        });
        wrapper = shallowMount(EditForm, {
            localVue,
            store,
            propsData: {
                item: {
                    id: "dummyId",
                    name: "dummyName",
                    purchaseDate: "2021-05-21",
                },
            },
        });
    });
    test("renders props.msg when passed", () => {
        expect(wrapper).toMatchSnapshot();
    });
    test("close()", () => {
        wrapper.vm.close();
    });
    test("changeName()", () => {
        const dummyName = "dummyChangedName";
        wrapper.vm.changeName(dummyName);
        expect(wrapper.vm.formItem.name).toBe(dummyName);
    });
    test("changePurchaseDate()", () => {
        const dummyDate = "2021-05-22";
        wrapper.vm.changePurchaseDate(dummyDate);
        expect(wrapper.vm.formItem.purchaseDate).toBe(dummyDate);
    });
});
