<template>
    <button class="app-button" @click="click"><slot /></button>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    methods: {
        click() {
            this.$emit("click");
        },
    },
});
</script>
