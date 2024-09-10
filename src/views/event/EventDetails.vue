<script setup lang="ts">
defineProps(['event'])
import { formatDate } from '@/helpers/helpers'
</script>

<template>
  <p>{{ event.time }} on {{ formatDate(event.date) }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>

<style scoped></style>
