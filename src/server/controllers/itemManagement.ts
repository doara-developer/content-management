import { Item } from "@common/types";

let itemList: Item[] = [
    {
        id: "1234",
        name: "ゴミ袋",
        purchaseDate: "2021-05-21",
    },
];
export default class ItemManagement {
    constructor() {}
    getItems() {
        return itemList;
    }
    addItem(name: string, purchaseDate: string) {
        const generatedId = Math.random().toString(32).substring(2);
        itemList.push({
            id: generatedId,
            name,
            purchaseDate,
        });
    }
    deleteItem(id: string) {
        itemList = itemList.filter((item) => item.id !== id);
    }
}
