<template>
    <div class="date-form">
        <div class="date-form-title"><slot /></div>
        <InputDate :value="value" @change="change" />
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import InputDate from "@client/components/atoms/InputDate.vue";

export default Vue.extend({
    components: { InputDate },
    props: {
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
.date-form {
    @include display-flex($justify: flex-start);
}
.date-form-title {
    margin-right: 10px;
}
</style>
