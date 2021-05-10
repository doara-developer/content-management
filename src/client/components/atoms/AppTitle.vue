<template>
    <a href="/">
        <h1 class="app-title"><slot /></h1>
    </a>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
<style lang="scss" scoped>
.app-title {
    color: $header-font-color;
}
</style>
