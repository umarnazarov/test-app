<template>
    <div class="flex flex-row w-full">
        <div class="flex items-center gap-10 flex-1 p-4 cursor-pointer select-none">
            <div class="">
                <div class="font-medium text-black">
                    {{ contact?.fullName }}
                </div>
            </div>
            <div class="text-xs text-black">
                {{ contact?.email }}
            </div>

            <div class="text-xs text-black">
                {{ contact?.number }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { IContact } from '../types';

defineProps({
    contact: Object as PropType<IContact>
})
</script>

<style scoped></style>