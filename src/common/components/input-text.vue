<template>
    <input
        class="rounded-lg flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
        :value="modelValue" @input="updateInput" />
</template>

<script setup lang="ts">
defineProps({
    modelValue: {
        type: [String, Number],
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

const updateInput = (e) => {
    emit('update:modelValue', e.target.value)
}
</script>

<style scoped></style>