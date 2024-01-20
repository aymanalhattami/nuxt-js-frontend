<script setup lang="ts">
import {RegisterPayload} from "~/types";
import {FormKitNode} from "@formkit/core";
import {AxiosError} from "axios";

definePageMeta({
  layout: "centered",
});

const form = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
});

const { register } = useAuth();

async function handleRegister(payload: RegisterPayload, node: FormKitNode){
    try{
        await register(payload);
    }catch (e) {
        if(e instanceof AxiosError && e.response?.status === 422){
            node.setErrors([], e.response.data.errors);
        }
    }
}

</script>
<template>
  <div class="register">
    <h1>Register</h1>
<!--    <form @submit.prevent="register(form)">-->
<!--      <label>-->
<!--        <div>Name</div>-->
<!--        <input v-model="form.name" type="text" />-->
<!--      </label>-->

<!--      <label>-->
<!--        <div>Email</div>-->
<!--        <input v-model="form.email" type="email" />-->
<!--      </label>-->

<!--      <label>-->
<!--        <div>Password</div>-->
<!--        <input v-model="form.password" type="password" />-->
<!--      </label>-->

<!--      <label>-->
<!--        <div>Confirm Password</div>-->
<!--        <input v-model="form.password_confirmation" type="password" />-->
<!--      </label>-->

<!--      <button class="btn">Register</button>-->
<!--    </form>-->

      <FormKit type="form" submit-label="Register" @submit="handleRegister">
          <FormKit type="text" label="Name" name="name" />
          <FormKit type="email" label="Email" name="email" />
          <FormKit type="password" label="Password" name="password" />
          <FormKit type="password" label="Password" name="password_confirmation" />
      </FormKit>

    <p>
      Already have an account?
      <NuxtLink class="underline text-lime-600" to="/login">Login</NuxtLink>
    </p>
  </div>
</template>
