import { Item } from "@common/types";

let itemList: Item[] = [
    {
        id: "1234",
        name: "ゴミ袋",
    },
];
export default class ItemManagement {
    constructor() {}
    getItems() {
        return itemList;
    }
    addItem(name: string) {
        const generatedId = Math.random().toString(32).substring(2);
        itemList.push({
            id: generatedId,
            name,
        });
    }
    deleteItem(id: string) {
        itemList = itemList.filter((item) => item.id !== id);
    }
}
