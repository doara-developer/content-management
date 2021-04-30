<template>
    <div>
        <AppHeader />
        <main>
            <MainNavigation />
            <ItemList />
        </main>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import AppHeader from "@client/components/organisms/AppHeader.vue";
import MainNavigation from "@client/components/organisms/MainNavigation.vue";
import ItemList from "@client/components/organisms/ItemList.vue";

export default Vue.extend({
    components: { AppHeader, MainNavigation, ItemList },
});
</script>
