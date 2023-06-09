<template>
    <ul class="flex justify-between items-baseline ml-10 space-x-4">
        <li v-for="menu in MainMenuItems" :key="menu.name">
            <MainMenuItem :item="menu" />
        </li>
    </ul>
</template>

<script setup lang="ts">
import { MainMenuItems } from '@/common/consts/main-menu-items'
import MainMenuItem from '@/common/layouts/components/nav-bar/components/main-menu-item.vue'

</script>

<style lang="scss" scoped></style>