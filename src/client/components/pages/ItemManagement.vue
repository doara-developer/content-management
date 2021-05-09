<template>
    <div>
        <AppHeader />
        <main>
            <MainNavigation />
            <ItemListContent />
            <RegistrationForm v-if="isRegistrationForm" />
            <EditForm v-if="isEditForm" :item="dialogData" />
        </main>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import AppHeader from "@client/components/organisms/AppHeader.vue";
import MainNavigation from "@client/components/organisms/MainNavigation.vue";
import ItemListContent from "@client/components/organisms/ItemListContent.vue";
import RegistrationForm from "@client/components/organisms/RegistrationForm.vue";
import EditForm from "@client/components/organisms/EditForm.vue";
import { DialogTypeEnum } from "@client/ts/stores/types";

export default Vue.extend({
    components: {
        AppHeader,
        MainNavigation,
        ItemListContent,
        RegistrationForm,
        EditForm,
    },
    async mounted() {
        await this.$store.dispatch("itemList/update");
    },
    computed: {
        isRegistrationForm() {
            return (
                this.$store.state.dialog.type ===
                DialogTypeEnum.RegistrationForm
            );
        },
        isEditForm() {
            return this.$store.state.dialog.type === DialogTypeEnum.EditForm;
        },
        dialogData() {
            return this.$store.state.dialog.data.item;
        },
    },
});
</script>
