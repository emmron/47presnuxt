<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-4xl font-bold" :class="valueColor">{{ value }}</p>
    <p class="text-gray-600 mt-2">{{ description }}</p>
    <p v-if="source" class="text-xs text-gray-500 mt-2">Source: {{ source }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: String,
  description: String,
  source: String,
  valueColor: {
    type: String,
    default: 'text-blue-600'
  }
})
</script> 