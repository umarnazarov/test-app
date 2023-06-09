<template>
    <div class="flex gap-2 shrink-0 h-10">
        <AppButton @click="showCreateModal" :type="ButtonType.SUCCESS">Create</AppButton>
        <AppButton @click="handleLogout" :type="ButtonType.WARNING">Logout</AppButton>
        <Modal v-model:show="createModalVisible">
            <ContactForm title="Create Contact" @form-submit="handleSubmit" :contact="store.state.newContact" />
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import AppButton from '@/common/components/app-button.vue';
import Modal from '@/common/components/modal/modal.vue';
import { ButtonType } from '@/common/types';
import { AuthRouteName } from '@/modules/auth/routes';
import ContactForm from '@/modules/contacts/components/contact-form.vue';
import { useContactsStore } from '@/modules/contacts/store/contacts-store';
import { useAuth } from '@/modules/auth/hooks/use-auth';

const createModalVisible = ref(false)
const store = useContactsStore()
const authHook = useAuth()

const handleLogout = () => {
    authHook.logout()
    document.location.href = '/' + AuthRouteName.SIGN_IN;
}

const showCreateModal = () => {
    createModalVisible.value = true
}

const handleSubmit = () => {
    createModalVisible.value = false
    store.createContact()
}
</script>

<style scoped></style>