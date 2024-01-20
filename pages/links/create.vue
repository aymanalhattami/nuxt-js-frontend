<script setup>
definePageMeta({
    middleware: ['auth']
})
</script>

<template>
  <h1>Create New Link</h1>
  <GoBack>or go back to links</GoBack>
    <FormKit type="form" submit-label="create">
        <FormKit type="text" name="full_link" />
    </FormKit>
</template>
