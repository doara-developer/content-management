import { getItems, addItem, updateItem, deleteItem } from "@client/ts/api";

global.fetch = jest.fn();
describe("api.ts", () => {
    describe("getItems", () => {
        test("normal", async () => {
            const dummy_response = {
                item_list: [
                    {
                        id: "dummy_id",
                        name: "dummy_name",
                        purchaseDate: "2021-05-21",
                    },
                ],
            };
            const dummy_response_json = {
                json: () => Promise.resolve(dummy_response),
            };
            (jest.spyOn(global, "fetch") as any).mockImplementation(() =>
                Promise.resolve(dummy_response_json)
            );
            const res = await getItems();
            expect(res).toBe(dummy_response);
        });
    });
    describe("addItem", () => {
        test("normal", async () => {
            const dummy_response_json = {
                json: () => Promise.resolve({}),
            };
            (jest.spyOn(global, "fetch") as any).mockImplementation(() =>
                Promise.resolve(dummy_response_json)
            );
            await addItem("dummy_name", "2021-05-21");
        });
    });
    describe("updateItem", () => {
        test("normal", async () => {
            const dummy_response_json = {
                json: () => Promise.resolve({}),
            };
            (jest.spyOn(global, "fetch") as any).mockImplementation(() =>
                Promise.resolve(dummy_response_json)
            );
            await updateItem({
                id: "dummyId",
                name: "dummyName",
                purchaseDate: "2021-05-09",
            });
        });
    });
    describe("deleteItem", () => {
        test("normal", async () => {
            const dummy_response_json = {};
            (jest.spyOn(global, "fetch") as any).mockImplementation(() =>
                Promise.resolve(dummy_response_json)
            );
            await deleteItem("id");
        });
    });
});
