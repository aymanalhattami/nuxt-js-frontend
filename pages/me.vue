<script setup>
definePageMeta({
    middleware: ['auth']
})
import axios from "axios";

const { data:user } = await axios.get('/user');

console.log(user);
</script>

<template>
  <p><strong>User Name:</strong> {{ user.name }}</p>
  <p><strong>User Email:</strong> {{ user.email }}</p>
</template>
