<template>
    <div>
        <ContactSearch />
        <div class="container my-3 flex flex-col items-start justify-center mx-auto rounded-lg shadow bg-white w-full"
            v-for="contact in store.searchedContacts" :key="contact.id">
            <router-link :to="`contact/${contact?.id!}`">
                <ContactItem :contact="contact" />
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import ContactItem from '../components/contact-item.vue'
import ContactSearch from '../components/contacts-search.vue'
import { useContactsStore } from '../store/contacts-store';

const store = useContactsStore()
</script>

<style lang="scss" scoped></style>