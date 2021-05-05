import { mockReq, mockRes } from "sinon-express-mock";
import { Request, Response } from "express";
import { getItems, addItem, deleteItem } from "@server/views/items";
import ItemManagement from "@server/controllers/itemManagement";

jest.mock("@server/controllers/itemManagement");

describe("ItemManagement", () => {
    describe("getItems", () => {
        test("Normal test", () => {
            const jsonMock = jest.fn();
            const dummyReq = mockReq();
            const dummyRes = mockRes();
            getItems(dummyReq, dummyRes);
        });
    });
    describe("addItem", () => {
        test("Normal test", () => {
            const dummyBody = {
                body: {
                    name: "dummyName",
                },
            };
            const dummyReq = mockReq(dummyBody);
            const dummyRes = mockRes();
            addItem(dummyReq, dummyRes);
            expect(dummyRes.status.calledWith(201)).toBeTruthy();
        });
    });
    describe("deleteItem", () => {
        test("Normal test", () => {
            const dummyParams = {
                params: {
                    itemId: "dummyId",
                },
            };
            const dummyReq = mockReq(dummyParams);
            const dummyRes = mockRes();
            deleteItem(dummyReq, dummyRes);
            expect(dummyRes.status.calledWith(200)).toBeTruthy();
        });
    });
});
