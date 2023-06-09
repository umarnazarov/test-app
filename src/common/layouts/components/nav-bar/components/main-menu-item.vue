<template>
    <router-link :to="`/${item.href}`"
        class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        active-class="text-white">

        <div class="line-height-4 overflow-hidden white-space-nowrap text-overflow-ellipsis">{{ item.name }}</div>
    </router-link>
</template>

<script setup lang="ts">
import type { IMainMenuItem } from '@/common/layouts/components/nav-bar/types/'

defineProps<{ item: IMainMenuItem }>()
</script>

<style scoped></style>