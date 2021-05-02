<template>
    <div>
        <AppHeader />
        <main>
            <MainNavigation />
            <ItemListContent />
        </main>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { getItems } from "@client/ts/api";
import AppHeader from "@client/components/organisms/AppHeader.vue";
import MainNavigation from "@client/components/organisms/MainNavigation.vue";
import ItemListContent from "@client/components/organisms/ItemListContent.vue";

export default Vue.extend({
    components: { AppHeader, MainNavigation, ItemListContent },
    async mounted() {
        const res = await getItems();
        this.$store.dispatch("itemList/update", res.item_list);
    },
});
</script>
