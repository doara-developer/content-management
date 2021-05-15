export type Item = {
    id: string;
    status: CheckedStatusEnumType;
    name: string;
    purchaseDate: string;
};

export type GetItemsResponse = {
    item_list: Item[];
};

export const CheckedStatusEnum = {
    Must: "must",
    Checked: "checked",
    None: "none",
} as const;

export type CheckedStatusEnumType =
    typeof CheckedStatusEnum[keyof typeof CheckedStatusEnum];
