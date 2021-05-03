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
import AppHeader from "@client/components/organisms/AppHeader.vue";
import MainNavigation from "@client/components/organisms/MainNavigation.vue";
import ItemListContent from "@client/components/organisms/ItemListContent.vue";

export default Vue.extend({
    components: { AppHeader, MainNavigation, ItemListContent },
    async mounted() {
        await this.$store.dispatch("itemList/update");
    },
});
</script>
