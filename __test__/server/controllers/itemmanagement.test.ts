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
            controller.addItem("dummyItem", "2021-05-21");
        });
    });
    describe("updateItem", () => {
        test("Normal test", () => {
            const controller = new ItemManagement();
            controller.updateItem("1234", "dummyItem", "2021-05-21");
        });
        test("Abnormal test(Not Found)", () => {
            const controller = new ItemManagement();
            controller.updateItem("dummyId", "dummyItem", "2021-05-21");
        });
    });
    describe("deleteItem", () => {
        test("Normal test", () => {
            const controller = new ItemManagement();
            controller.deleteItem("dummyId");
        });
    });
});
