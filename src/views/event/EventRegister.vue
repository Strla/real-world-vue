<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps, inject } from 'vue'

export type GStoreType = {
  flashMessage: string
}

const props = defineProps(['event'])
const router = useRouter()
const GStore = inject<GStoreType>('GStore')

const register = () => {
  if (GStore) {
    GStore.flashMessage = `Event registration successful for ${props.event.title}`
    setTimeout(() => {
      GStore.flashMessage = ''
    }, 3000)
    router.push({ name: 'event-details' })
  }
}
</script>

<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me!</button>
</template>

<style scoped></style>
