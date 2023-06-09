<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-center">Sign In</h1>
        <SignInForm />
        <div class="hint">
            username: user <br />
            pass:1234
        </div>
    </div>
</template>

<script lang="ts" setup>
import SignInForm from '../components/sign-in-form.vue'
</script>

<style lang="scss" scoped>
.hint {
    position: fixed;
    top: 0;
    left: 0;
    background-color: blue;
    color: white;
}
</style>