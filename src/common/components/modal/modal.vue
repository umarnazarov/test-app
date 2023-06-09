<template>
    <div @click="hideDialog" class="fixed top-0 left-0 right-0 bottom-0 bg-opacity-90 bg-gray-900 flex" v-if="show">
        <div @click.stop class="m-auto bg-white p-3">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    show: {
        default: false,
        type: Boolean
    }
})

const emit = defineEmits(['update:show'])

const hideDialog = () => {
    emit('update:show', false)
}
</script>

<style scoped></style>