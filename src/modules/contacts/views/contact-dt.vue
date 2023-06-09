<template>
    <div v-for="(item, key) in contactInfo" :key="key" class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 ">
            {{ key }}
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ item }}
        </dd>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ContactInfo } from '../types';

defineProps({
    contactInfo: Object as PropType<ContactInfo>,

})
</script>

<style scoped></style>