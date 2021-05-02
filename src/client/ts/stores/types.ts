import { Item } from "@common/types";

export interface RootState {
    version: string;
}

export interface ItemListState {
    itemList: Item[];
}
