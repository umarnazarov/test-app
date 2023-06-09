<template>
    <div class="default-layout">
        <NavBar />
        <div class="px-8 mx-auto max-w-7xl pt-8">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts" setup>
import NavBar from '@/common/layouts/components/nav-bar/nav-bar.vue'

</script>

<style lang="scss" scoped></style>