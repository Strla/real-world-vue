<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type Event } from '@/models/models'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'

const event = ref<Event>()
const router = useRouter()
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.error('error:', error)
      if (error.response && error.response.status == 404) {
        router.push({
          name: '404-resource',
          params: { resource: 'event' }
        })
      } else {
        router.push({
          name: 'network-error'
        })
      }
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <RouterLink :to="{ name: 'event-details' }">Details</RouterLink>
      <RouterLink :to="{ name: 'event-register' }">Register</RouterLink>
      <RouterLink :to="{ name: 'event-edit' }">Edit</RouterLink>
    </div>
    <RouterView :event="event"></RouterView>
  </div>
</template>

<style scoped></style>
