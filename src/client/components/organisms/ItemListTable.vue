<template>
    <div class="item-list-table">
        <div class="item-list-header">
            <div class="item-list-name">名前</div>
            <div class="item-list-date">最終購入日</div>
            <div class="item-list-action">操作</div>
        </div>
        <div
            v-for="item in itemList"
            :key="item.id"
            class="item-list-table-content"
        >
            <div class="item-list-name">{{ item.name }}</div>
            <div class="item-list-date">{{ item.purchaseDate }}</div>
            <div class="item-list-action">
                <AppButton @click="editItem(item)">編集</AppButton>
                <AppButton @click="deleteItem(item.id)">削除</AppButton>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import AppButton from "@client/components/atoms/AppButton.vue";
import { deleteItem } from "@client/ts/api";
import { Item } from "@common/types";

export default Vue.extend({
    components: { AppButton },
    computed: {
        itemList() {
            return this.$store.state.itemList.itemList;
        },
    },
    methods: {
        async deleteItem(id: string) {
            await deleteItem(id);
            await this.$store.dispatch("itemList/update");
        },
        async editItem(item: Item) {
            await this.$store.dispatch("dialog/openEditForm", { item });
        },
    },
});
</script>
<style lang="scss" scoped>
.item-list-table {
    width: 80%;
    border-radius: $table-border-radius;
    border: $table-border;
}
.item-list-header {
    @include display-flex($justify: flex-start);
    width: 100%;
    background-color: $table-header-color;
    color: $font-color;
    border-top-left-radius: $table-border-radius;
    border-top-right-radius: $table-border-radius;
    padding: 5px;
}
.item-list-table-content {
    @include display-flex($justify: flex-start);
    width: 100%;
    color: $font-color;
    padding: 5px;
    border-bottom: 1px solid #ded5c0;
}
.item-list-name {
    width: 50%;
}
.item-list-date {
    width: 30%;
}
.item-list-action {
    width: 20%;
}
</style>
