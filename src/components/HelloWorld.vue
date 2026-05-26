<template>
  <section class="max-w-xl mx-auto bg-white border rounded-md p-4">
    <p class="text-gray-700">{{ msg }}</p>
  </section>
</template>

<script setup>
const props = defineProps({
  msg: {
    type: String,
    default: 'Hello from Vue!'
  }
})
</script>
