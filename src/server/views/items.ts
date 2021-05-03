import { Request, Response } from "express";
import { GetItemsResponse } from "@common/types";
import ItemManagement from "@server/controllers/itemManagement";

export const getItems = async (req: Request, res: Response): Promise<void> => {
    const manager = new ItemManagement();
    const itemList = manager.getItems();
    const response: GetItemsResponse = {
        item_list: itemList,
    };
    res.json(response);
};

export const addItem = async (req: Request, res: Response): Promise<void> => {
    const manager = new ItemManagement();
    manager.addItem(req.body.name);
    res.status(201).end();
};
