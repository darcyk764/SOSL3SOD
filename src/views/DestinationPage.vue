<!-- Destinations.vue -->
<template>
  <section class="bg-white p-4 rounded shadow">
    <h2 class="text-2xl font-bold text-green-700">
      {{ provinceName }}
    </h2>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const provinceName = computed(() => {
  const provinces = {
    1: 'Northern Province',
    2: 'Western Province',
    3: 'Eastern Province',
    4: 'Southern Province'
  }
  
  return provinces[route.query.province]
})
</script>