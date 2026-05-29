<template>
  <section class="bg-white p-4 rounded shadow">

 <!-- FOREST IMAGES -->
<div v-if="route.query.type === 'images'">
  <h2 class="text-2xl font-bold text-green-700 mb-4">
    Forest Gallery
  </h2>

  <div class="grid grid-cols-2 gap-4">
    <img
      src="https://images.unsplash.com/photo-1448375240586-882707db888b"
      class="rounded-lg w-full h-40 object-cover"
      alt="Forest 1"
    />

    <img
      src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
      class="rounded-lg w-full h-40 object-cover"
      alt="Forest 2"
    />

    <img
      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
      class="rounded-lg w-full h-40 object-cover"
      alt="Forest 3"
    />

    <img
      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
      class="rounded-lg w-full h-40 object-cover"
      alt="Forest 4"
    />
  </div>
</div>
    <!-- VIDEOS (TEXT ONLY) -->
    <div v-else-if="route.query.type === 'videos'">
  <h2 class="text-2xl font-bold text-green-700 mb-4">
    Video Gallery
  </h2>

  <!-- IMAGE -->
  <img
    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    alt="Video Gallery Preview"
    class="w-full h-[300px] object-cover rounded-2xl shadow-md"
  />
</div>

  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>