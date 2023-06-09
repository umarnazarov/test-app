<template>
    <div class="bg-white inputs_container p-6 rounded-md">
        <div class="flex flex-col gap-6 inputs_content">
            <FormField :input="username" />
            <FormField :input="password" />
            <AppButton @click="handleLogin" :type="ButtonType.PRIMARY">Submit</AppButton>
            <small v-if="errorMessage" class="text-red-600">
                {{ errorMessage }}
            </small>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

import FormField from '@/modules/auth/components/form-field.vue';
import { IFormInput } from '@/modules/auth/types';
import AppButton from '@/common/components/app-button.vue';
import { ButtonType } from '@/common/types';
import { useAuth } from '@/modules/auth/hooks/use-auth';

const authHook = useAuth()

let errorMessage = ref('')

let username = reactive<IFormInput>({
    placeholder: 'Email',
    component: 'InputText',
    value: '',

})

let password = reactive<IFormInput>({
    placeholder: 'Password',
    component: 'InputText',
    value: '',

})

const handleLogin = () => {
    if (username.value !== 'user') {
        errorMessage.value = 'user doesnt exist'
        return
    }

    if (password.value !== '1234') {
        errorMessage.value = 'invalid password'
        return
    }

    authHook.login({ name: username.value })
}
</script>

