<template>
    <input type="text" v-model="inputText" />
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        value: {
            type: String,
            default: "",
        },
    },
    computed: {
        inputText: {
            get(): string {
                return this.value;
            },
            set(value: string) {
                this.$emit("change", value);
            },
        },
    },
});
</script>
