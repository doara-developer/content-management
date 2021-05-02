import { GetItemsResponse } from "@common/types";

export const getItems = async () => {
    const res = await fetch("/items");
    return res.json() as Promise<GetItemsResponse>;
};
