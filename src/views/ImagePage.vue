<template>
  <section class="bg-white p-4 rounded shadow">

    <!-- IMAGES -->
    <div v-if="route.query.type === 'images'">
      <h2 class="text-2xl font-bold text-green-700 mb-4">
        Gallery Images
      </h2>

      <div class="grid grid-cols-2 gap-4">
        <img src="" class="rounded-lg w-full" />
        <img src="" class="rounded-lg w-full" />
      </div>
    </div>

    <!-- VIDEOS (TEXT ONLY) -->
    <div v-else-if="route.query.type === 'videos'">
      <h2 class="text-2xl font-bold text-green-700 mb-4">
        Video Gallery
      </h2>
    </div>

  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>