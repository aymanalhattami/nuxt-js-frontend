<script setup lang="ts">
import axios, {AxiosError} from "axios";
import {LoginPayload} from "~/types";
import {FormKitNode} from "@formkit/core";
import {handleInvalidForm} from "utils";

definePageMeta({
    layout: "centered",
    middleware: ['guest']
});

const { login } = useAuth();

// const form = ref({
//     email: '',
//     password: ''
// });
//
// const errors = ref({
//    email: [],
//    password: []
// });

async function handleLogin(payload: LoginPayload, node: FormKitNode){
    try {
        await login(payload)
    }catch (e) {
        handleInvalidForm(e, node);
    }
}


</script>
<template>
  <div class="login">
    <h1>Login</h1>
<!--    <form @submit.prevent="handleLogin">-->
<!--      <label>-->
<!--        <div>Email</div>-->
<!--        <input type="text" v-model="form.email" />-->
<!--          <div class="text-red-500 p-0.5 text-sm" v-for="error in errors.email">{{ error }}</div>-->
<!--      </label>-->

<!--      <label>-->
<!--        <div>Password</div>-->
<!--        <input type="password" v-model="form.password" />-->
<!--          <div class="text-red-500 p-0.5 text-sm" v-for="error in errors.password">{{ error }}</div>-->
<!--      </label>-->
<!--      <button class="btn">Login</button>-->
<!--    </form>-->

      <FormKit type="form" submit-label="Login" @submit="handleLogin">
          <FormKit type="email" label="Email" name="email" />
          <FormKit type="password" label="Password" name="password" />
      </FormKit>
    <p>
      Don't have an account?
      <NuxtLink class="underline text-lime-600" to="/register"
        >Register now!</NuxtLink
      >
    </p>
  </div>
</template>
