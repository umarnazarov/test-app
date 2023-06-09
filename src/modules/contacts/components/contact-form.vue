<template>
    <div class="flex flex-col gap-4">
        <div>
            <h4 class="text-center">{{ title }}</h4>
        </div>
        <InputText v-model="editedContact.fullName" placeholder="Full Name"></InputText>
        <InputText v-model="editedContact.email" placeholder="Email"></InputText>
        <InputText v-model="editedContact.number" placeholder="Number"></InputText>
        <AppButton @click="handleUpdate" :type="ButtonType.SUCCESS">Submit</AppButton>
    </div>
</template>

<script setup lang="ts">
import { PropType, toRef } from 'vue';

import { IContact } from '../types';
import AppButton from '@/common/components/app-button.vue';
import { ButtonType } from '@/common/types';
import InputText from '@/common/components/input-text.vue'

const emit = defineEmits(['form-submit'])
const props = defineProps({
    title: String,
    contact: {
        required: true,
        type: Object as PropType<IContact>
    }
})

const editedContact = toRef<IContact>(props.contact)

const handleUpdate = () => {
    emit('form-submit')
}

</script>

<style scoped></style>