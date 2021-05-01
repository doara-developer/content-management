<template>
    <div class="item-list-content">
        <div v-for="item in itemList" :key="item.id">
            <div>{{ item.name }}</div>
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
.item-list-content {
    width: 100%;
}
</style>
