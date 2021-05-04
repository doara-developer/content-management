<template>
    <div class="registration-form-modal">
        <div class="registration-form">
            <div class="registration-form-header">日用品登録</div>
            <div class="registration-form-content">
                <TextForm :value="name" @change="changeName">名前</TextForm>
            </div>
            <div class="registration-form-action">
                <AppButton @click="add">登録</AppButton>
                <AppButton @click="close">閉じる</AppButton>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import AppButton from "@client/components/atoms/AppButton.vue";
import TextForm from "@client/components/molecules/TextForm.vue";
import { addItem } from "@client/ts/api";

type DataType = {
    name: string;
};
export default Vue.extend({
    components: { AppButton, TextForm },
    data(): DataType {
        return {
            name: "",
        };
    },
    methods: {
        async add() {
            await addItem(this.name);
            await this.$store.dispatch("itemList/update");
            this.$emit("close");
        },
        close() {
            this.$emit("close");
        },
        changeName(value: string) {
            this.name = value;
        },
    },
});
</script>
<style lang="scss" scoped>
.registration-form-modal {
    @include modal();
    @include display-flex();
}
.registration-form {
    width: 600px;
    height: 300px;
    background-color: white;
    border-radius: $table-border-radius;
    border: $table-border;
}
.registration-form-header {
    @include display-flex();
    width: 100%;
    background-color: $table-header-color;
    color: #401c00;
    border-top-left-radius: $table-border-radius;
    border-top-right-radius: $table-border-radius;
    padding: 5px;
}
.registration-form-content {
    height: 200px;
    @include display-flex();
}
.registration-form-action {
    @include display-flex();
}
</style>
