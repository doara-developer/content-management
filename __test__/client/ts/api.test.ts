import { getItems } from "@client/ts/api";

global.fetch = jest.fn();
describe("api.ts", () => {
    describe("getItems", () => {
        test("normal", async () => {
            const dummy_response = {
                item_list: [
                    {
                        id: "dummy_id",
                        name: "dummy_name",
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
});
