<template>
    <InputText placeholder="Search Contact" v-model="store.state.term" />
</template>

<script setup lang="ts">
import InputText from '@/common/components/input-text.vue'
import { useContactsStore } from '../store/contacts-store';

const store = useContactsStore()

</script>

<style scoped></style>