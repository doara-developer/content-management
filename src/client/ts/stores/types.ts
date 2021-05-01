export interface RootState {
    version: string;
}

export interface ItemListState {
    itemList: Item[];
}

export interface Item {
    id: string;
    name: string;
}
