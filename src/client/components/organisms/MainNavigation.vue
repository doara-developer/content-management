<template>
    <div class="main-navigation">
        <AppButton @click="add">追加</AppButton>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import AppButton from "@client/components/atoms/AppButton.vue";
import { addItem } from "@client/ts/api";

export default Vue.extend({
    components: { AppButton },
    methods: {
        async add() {
            await addItem("dummy_item");
            await this.$store.dispatch("itemList/update");
        },
    },
});
</script>
<style lang="scss" scoped>
.main-navigation {
    width: 100%;
    height: 50px;
    @include display-flex($justify: flex-start);
    padding: 5px 0px 5px 10px;
}
</style>
