export type Item = {
    id: string;
    name: string;
};

export type GetItemsResponse = {
    item_list: Item[];
};
