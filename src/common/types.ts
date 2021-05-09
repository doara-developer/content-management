export type Item = {
    id: string;
    name: string;
    purchaseDate: string;
};

export type GetItemsResponse = {
    item_list: Item[];
};
