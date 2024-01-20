<script setup lang="ts">
import {FormKitNode} from "@formkit/core";
import axios from "axios";
import {nanoid} from "nanoid";

definePageMeta({
    middleware: ['auth']
})

async function createLink(payload, node?: FormKitNode){
    try{
        await axios.post('/links', {
            ...payload,
            short_link: nanoid(8)
        });

        useRouter().push('/links');
    }catch (e) {
        handleInvalidForm(e, node)
    }
}
</script>

<template>
  <h1>Create New Link</h1>
  <GoBack>or go back to links</GoBack>
    <FormKit type="form" submit-label="create" @submit="createLink">
        <FormKit type="text" name="full_link" />
    </FormKit>
</template>
