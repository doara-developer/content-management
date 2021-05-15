import { Item, CheckedStatusEnum } from "@common/types";
import logger from "@server/logger";

let itemList: Item[] = [
    {
        id: "1234",
        status: CheckedStatusEnum.Must,
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
            status: CheckedStatusEnum.None,
            name,
            purchaseDate,
        });
    }
    updateItem(id: string, name: string, purchaseDate: string) {
        const item = itemList.find((item) => item.id === id);
        if (item) {
            item.name = name;
            item.purchaseDate = purchaseDate;
            logger.info(id + " was updated.");
        } else {
            logger.error(id + " is not found.");
        }
    }
    deleteItem(id: string) {
        itemList = itemList.filter((item) => item.id !== id);
    }
}
