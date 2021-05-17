<template>
    <div class="select-form">
        <div class="select-form-title"><slot /></div>
        <Select :value="value" :options="options" @change="change" />
    </div>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import Select from "@client/components/atoms/Select.vue";
import { OptionType } from "@common/types";

export default Vue.extend({
    components: { Select },
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
    methods: {
        change(value: string) {
            this.$emit("change", value);
        },
    },
});
</script>
<style lang="scss" scoped>
.select-form {
    @include display-flex($justify: flex-start);
}
.select-form-title {
    margin-right: 10px;
}
</style>
