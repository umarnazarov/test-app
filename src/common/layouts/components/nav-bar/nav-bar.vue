<template>
    <nav class="bg-white dark:bg-gray-800">
        <div class="px-8 mx-auto max-w-7xl">
            <div class="flex items-center justify-between h-16">
                <div class=" flex items-center justify-between w-full">
                    <div>
                        <MainMenu />
                    </div>
                    <CtaActions />
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import CtaActions from '@/common/layouts/components/nav-bar/components/cta-actions.vue'
import MainMenu from '@/common/layouts/components/nav-bar/components/main-menu.vue'
</script>