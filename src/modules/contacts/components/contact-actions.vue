<template>
    <div v-for="action in store.contactActions">
        <AppButton :type="action.type" @click="action.callback(+route.params.id)">{{ action.text }}</AppButton>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useContactsStore } from '../store/contacts-store';
import AppButton from '@/common/components/app-button.vue';

const route = useRoute()
const store = useContactsStore()

</script>

<style scoped></style>