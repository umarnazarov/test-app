<template>
    <div>
        <component :placeholder="input.placeholder" class="w-full" :id="input.placeholder" :type="input.type"
            v-model="input.value" :is="input.component"></component>
    </div>
</template>
<script lang="ts" setup>
import { type PropType } from 'vue'

import type { IFormInput } from '../types.js'

const { input } = defineProps({
    input: {
        type: Object as PropType<IFormInput>,
        required: true,
    },
})

</script>
<style lang="scss"></style>