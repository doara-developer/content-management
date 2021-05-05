import { GetItemsResponse } from "@common/types";

export const getItems = async () => {
    const res = await fetch("/items");
    return res.json() as Promise<GetItemsResponse>;
};

export const addItem = async (name: string) => {
    const res = await fetch("/items", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
        }),
    });
};

export const deleteItem = async (id: string) => {
    const res = await fetch("/items/" + id, {
        method: "DELETE",
    });
};
