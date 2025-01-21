<template>
  <div v-if="pending" class="flex justify-center items-center min-h-screen">
    <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-900"></div>
  </div>

  <div v-else-if="error">
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      Failed to load data. Please try again later.
    </div>
  </div>

  <div v-else class="space-y-8">
    <h1 class="text-4xl font-bold mb-8">Executive Orders & Actions</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard
        title="Executive Orders"
        :value="data.executiveActions.orders.value"
        :description="data.executiveActions.orders.description"
        :source="data.executiveActions.orders.source"
      />
      <StatCard
        title="Major Deregulations"
        :value="data.executiveActions.deregulations.value"
        :description="data.executiveActions.deregulations.description"
        :source="data.executiveActions.deregulations.source"
      />
      <StatCard
        title="Supreme Court Impact"
        :value="data.executiveActions.supremeCourt.value"
        :description="data.executiveActions.supremeCourt.description"
        :source="data.executiveActions.supremeCourt.source"
      />
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Key Executive Orders</h2>
      <div class="space-y-4">
        <div class="border-l-4 border-blue-600 pl-4">
          <h3 class="font-semibold">Immigration and Border Security</h3>
          <p>Executive Order 13767: Border Security and Immigration Enforcement Improvements</p>
          <p class="text-sm text-gray-600">Initiated the construction of the border wall and increased border security measures.</p>
        </div>
        <div class="border-l-4 border-blue-600 pl-4">
          <h3 class="font-semibold">Trade and Economic Policy</h3>
          <p>Executive Order 13765: Minimizing the Economic Burden of the Patient Protection and Affordable Care Act</p>
          <p class="text-sm text-gray-600">Began the process of repealing and replacing the Affordable Care Act.</p>
        </div>
        <div class="border-l-4 border-blue-600 pl-4">
          <h3 class="font-semibold">Regulatory Reform</h3>
          <p>Executive Order 13771: Reducing Regulation and Controlling Regulatory Costs</p>
          <p class="text-sm text-gray-600">Required two existing regulations to be eliminated for every new regulation issued.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import StatCard from '~/components/StatCard.vue'

// Fetch data from our API endpoint
const { data, pending, error } = await useFetch('/api/trump-stats')
</script>
