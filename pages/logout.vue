<script setup>

definePageMeta({
    middleware: ['auth']
})

const { logout } = useAuth();

logout();
</script>

<template>
  <div>Logging Out...</div>
</template>
