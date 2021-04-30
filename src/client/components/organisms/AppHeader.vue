<template>
    <header class="app-header">
        <AppTitle>日用品管理</AppTitle>
    </header>
</template>
<script lang="ts">
import Vue from "vue";
import AppTitle from "@client/components/atoms/AppTitle.vue";

export default Vue.extend({
    components: { AppTitle },
});
</script>
<style lang="scss" scoped>
.app-header {
    width: 100%;
    @include display-flex($justify: flex-start);
    padding: 5px 0px 5px 10px;
    background-color: $header-color;
}
</style>
