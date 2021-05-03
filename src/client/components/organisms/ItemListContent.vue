<template>
    <div class="item-list-content">
        <ItemListTable />
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import ItemListTable from "@client/components/organisms/ItemListTable.vue";

export default Vue.extend({
    components: { ItemListTable },
    computed: {
        itemList() {
            return this.$store.state.itemList.itemList;
        },
    },
});
</script>
<style lang="scss" scoped>
.item-list-content {
    width: 100%;
    padding-top: 10px;
    padding-left: 30px;
}
</style>
