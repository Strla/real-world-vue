<script setup lang="ts">
import { useRouter } from 'vue-router'
const props = defineProps(['event'])
const router = useRouter()
const register = () => {
  console.log('Registering for event:', props.event)
  router.push({ name: 'event-details' })
}
</script>

<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me!</button>
</template>

<style scoped></style>
