<template>
    <div class="max-w-2xl overflow-hidden bg-white shadow sm:rounded-lg">
        <div class="border-t border-gray-200">
            <dl>
                <ContactDt :contactInfo="contactInfo" />
            </dl>
        </div>
    </div>
    <div class="flex py-4 gap-4 justify-end">
        <ContactActions />
    </div>
    <Modal v-model:show="store.state.editModalVisible">
        <ContactForm title="Update Contact" @form-submit="store.state.editModalVisible = false" :contact="contact!" />
    </Modal>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from '@vue/reactivity';

import { useContactsStore } from '../store/contacts-store';
import ContactDt from './contact-dt.vue'
import ContactForm from '../components/contact-form.vue'
import ContactActions from '../components/contact-actions.vue'
import Modal from '@/common/components/modal/modal.vue';

const route = useRoute()
const store = useContactsStore()
const contact = store.getContactById(+route.params.id);

const contactInfo = computed(() => ({
    "Full Name": contact?.fullName!,
    "Email": contact?.email!,
    "Phone Number": contact?.number!,
    "Tags": contact?.tags.join(', ')!
}))

</script>

<style scoped></style>