<script setup lang="ts">
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

</script>
<template>
  <div class="register">
    <h1>Register</h1>
      <pre>
          {{ form }}
      </pre>
    <form @submit.prevent="register(form)">
      <label>
        <div>Name</div>
        <input v-model="form.name" type="text" />
      </label>

      <label>
        <div>Email</div>
        <input v-model="form.email" type="email" />
      </label>

      <label>
        <div>Password</div>
        <input v-model="form.password" type="password" />
      </label>

      <label>
        <div>Confirm Password</div>
        <input v-model="form.password_confirmation" type="password" />
      </label>

      <button class="btn">Register</button>
    </form>

    <p>
      Already have an account?
      <NuxtLink class="underline text-lime-600" to="/login">Login</NuxtLink>
    </p>
  </div>
</template>
