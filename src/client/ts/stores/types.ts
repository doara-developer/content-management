import { Item } from "@common/types";

export interface RootState {
    version: string;
}

export interface ItemListState {
    itemList: Item[];
}

export const DialogTypeEnum = {
    None: "None",
    RegistrationForm: "RegistrationForm",
    EditForm: "EditForm",
} as const;
export type DialogType = typeof DialogTypeEnum[keyof typeof DialogTypeEnum];
export type EditFormDataType = {
    item: Item;
};
export type DialogDataType = {} | EditFormDataType;

export interface DialogState {
    type: DialogType;
    data: DialogDataType;
}
