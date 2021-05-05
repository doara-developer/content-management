import ItemManagement from "@server/controllers/itemManagement";

describe("ItemManagement", () => {
    describe("getItems", () => {
        test("Normal test", () => {
            const controller = new ItemManagement();
            const res = controller.getItems();
            expect(res.length).toBe(1);
        });
    });
    describe("addItem", () => {
        test("Normal test", () => {
            const controller = new ItemManagement();
            controller.addItem("dummyItem");
        });
    });
    describe("deleteItem", () => {
        test("Normal test", () => {
            const controller = new ItemManagement();
            controller.deleteItem("dummyId");
        });
    });
});
