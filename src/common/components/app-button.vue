<template>
    <button type="button" :class="{
        'bg-red-700': type === ButtonType.WARNING,
        'bg-green-700': type === ButtonType.SUCCESS,
        'bg-gray-800': type === ButtonType.PRIMARY
    }"
        class="py-2 px-4 text-white w-full transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none rounded-lg ">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ButtonType } from '../types';

defineProps({
    type: String as PropType<ButtonType>
})
</script>

<style lang="scss" scoped></style>