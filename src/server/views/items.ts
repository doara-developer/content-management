import { Request, Response } from "express";
import { GetItemsResponse } from "@common/types";

export const getItems = async (req: Request, res: Response): Promise<void> => {
    const response: GetItemsResponse = {
        item_list: [
            {
                id: "1234",
                name: "server_name",
            },
        ],
    };
    res.json(response);
};
