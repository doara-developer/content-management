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
    manager.addItem(req.body.name, req.body.purchaseDate);
    res.status(201).end();
};

export const updateItem = async (
    req: Request,
    res: Response
): Promise<void> => {
    const manager = new ItemManagement();
    manager.updateItem(req.params.itemId, req.body.name, req.body.purchaseDate);
    res.status(200).end();
};

export const deleteItem = async (
    req: Request,
    res: Response
): Promise<void> => {
    const manager = new ItemManagement();
    manager.deleteItem(req.params.itemId);
    res.status(200).end();
};
