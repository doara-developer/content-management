<template>
    <div class="text-form">
        <div class="text-form-title"><slot /></div>
        <AppTextArea :value="value" @change="change" />
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import AppTextArea from "@client/components/atoms/AppTextArea.vue";

export default Vue.extend({
    components: { AppTextArea },
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
.text-form {
    @include display-flex($justify: flex-start);
}
.text-form-title {
    margin-right: 10px;
}
</style>
