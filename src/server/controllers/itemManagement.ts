import { Item } from "@common/types";

const itemList: Item[] = [
    {
        id: "1234",
        name: "server_name",
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
}
