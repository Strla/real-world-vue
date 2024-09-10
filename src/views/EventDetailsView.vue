<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { formatDate } from '@/helpers/helpers'
import { type Event } from '@/models/models'
import EventService from '@/services/EventService'

const event = ref<Event>()
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
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ formatDate(event.date) }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<style scoped></style>
