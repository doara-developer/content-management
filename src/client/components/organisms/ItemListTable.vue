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
            <div class="item-list-date"></div>
            <div class="item-list-action"></div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    computed: {
        itemList() {
            return this.$store.state.itemList.itemList;
        },
    },
});
</script>
<style lang="scss" scoped>
.item-list-table {
    width: 80%;
    border-radius: 5px;
    border: 1px solid #ded5c0;
}
.item-list-header {
    @include display-flex($justify: flex-start);
    width: 100%;
    background-color: #efe1be;
    color: #401c00;
    border-radius: 5px 5px 0px 0px;
    padding: 5px;
}
.item-list-table-content {
    @include display-flex($justify: flex-start);
    width: 100%;
    color: #401c00;
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
