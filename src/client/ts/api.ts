import { GetItemsResponse, Item } from "@common/types";

export const getItems = async () => {
    const res = await fetch("/items");
    return res.json() as Promise<GetItemsResponse>;
};

export const addItem = async (name: string, purchaseDate: string) => {
    const res = await fetch("/items", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            purchaseDate,
        }),
    });
};

export const updateItem = async (item: Item) => {
    const res = await fetch("/items/" + item.id, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: item.name,
            purchaseDate: item.purchaseDate,
        }),
    });
};

export const deleteItem = async (id: string) => {
    await fetch("/items/" + id, {
        method: "DELETE",
    });
};
