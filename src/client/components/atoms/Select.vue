<template>
    <select class="app-select" v-model="selectValue">
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.label }}
        </option>
    </select>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import { OptionType } from "@common/types";

export default Vue.extend({
    props: {
        options: {
            type: Array as PropType<OptionType[]>,
            default: () => [],
        },
        value: {
            type: String,
            default: "",
        },
    },
    computed: {
        selectValue: {
            get(): string {
                return this.value;
            },
            set(value: string) {
                console.log(value);
                this.$emit("change", value);
            },
        },
    },
});
</script>
