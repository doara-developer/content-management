<template>
    <div class="edit-form-modal">
        <div class="edit-form">
            <div class="edit-form-header">日用品</div>
            <div class="edit-form-content">
                <TextForm :value="formItem.name" @change="changeName"
                    >名前</TextForm
                >
                <DateForm
                    :value="formItem.purchaseDate"
                    @change="changePurchaseDate"
                    >購入日</DateForm
                >
                <div>{{ formItem.status }}</div>
            </div>
            <div class="edit-form-action">
                <AppButton @click="update">更新</AppButton>
                <AppButton @click="close">閉じる</AppButton>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import AppButton from "@client/components/atoms/AppButton.vue";
import TextForm from "@client/components/molecules/TextForm.vue";
import DateForm from "@client/components/molecules/DateForm.vue";
import { updateItem } from "@client/ts/api";
import { Item, CheckedStatusEnum } from "@common/types";

type DataType = {
    formItem: Item;
};
export default Vue.extend({
    components: { AppButton, TextForm, DateForm },
    props: {
        item: {
            type: Object as () => Item,
        },
    },
    data(): DataType {
        return {
            formItem: {
                id: "",
                status: CheckedStatusEnum.None,
                name: "",
                purchaseDate: "",
            },
        };
    },
    mounted() {
        this.formItem.id = this.item.id;
        this.formItem.status = this.item.status;
        this.formItem.name = this.item.name;
        this.formItem.purchaseDate = this.item.purchaseDate;
    },
    methods: {
        async update() {
            await updateItem(this.formItem);
            await this.$store.dispatch("itemList/update");
            this.$store.dispatch("dialog/close");
        },
        close() {
            this.$store.dispatch("dialog/close");
        },
        changeName(value: string) {
            this.formItem.name = value;
        },
        changePurchaseDate(value: string) {
            this.formItem.purchaseDate = value;
        },
    },
});
</script>
<style lang="scss" scoped>
.edit-form-modal {
    @include modal();
    @include display-flex();
}
.edit-form {
    width: 600px;
    height: 300px;
    background-color: white;
    border-radius: $table-border-radius;
    border: $table-border;
}
.edit-form-header {
    @include display-flex();
    width: 100%;
    background-color: $table-header-color;
    color: $font-color;
    border-top-left-radius: $table-border-radius;
    border-top-right-radius: $table-border-radius;
    padding: 5px;
}
.edit-form-content {
    height: 200px;
}
.edit-form-action {
    @include display-flex();
}
</style>
