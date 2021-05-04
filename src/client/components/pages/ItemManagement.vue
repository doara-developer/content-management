<template>
    <div>
        <AppHeader />
        <main>
            <MainNavigation @registraion="openRegistration" />
            <ItemListContent />
            <RegistrationForm
                v-if="registrationDialog"
                @close="closeRegistration"
            />
        </main>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import AppHeader from "@client/components/organisms/AppHeader.vue";
import MainNavigation from "@client/components/organisms/MainNavigation.vue";
import ItemListContent from "@client/components/organisms/ItemListContent.vue";
import RegistrationForm from "@client/components/organisms/RegistrationForm.vue";

type DataType = {
    registrationDialog: boolean;
};

export default Vue.extend({
    components: {
        AppHeader,
        MainNavigation,
        ItemListContent,
        RegistrationForm,
    },
    data(): DataType {
        return {
            registrationDialog: false,
        };
    },
    async mounted() {
        await this.$store.dispatch("itemList/update");
    },
    methods: {
        openRegistration() {
            this.registrationDialog = true;
        },
        closeRegistration() {
            this.registrationDialog = false;
        },
    },
});
</script>
