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
    <section>
      <h2 class="text-3xl font-bold mb-6">Economic Indicators (2017-2021)</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="GDP Growth"
          :value="data.economic.gdp.value"
          :description="data.economic.gdp.description"
          :source="data.economic.gdp.source"
        />
        <StatCard
          title="Unemployment Rate"
          :value="data.economic.unemployment.value"
          :description="data.economic.unemployment.description"
          :source="data.economic.unemployment.source"
        />
        <StatCard
          title="Stock Market Growth"
          :value="data.economic.stockMarket.value"
          :description="data.economic.stockMarket.description"
          :source="data.economic.stockMarket.source"
        />
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-bold mb-6">Executive Actions</h2>
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
          title="Supreme Court Appointments"
          :value="data.executiveActions.supremeCourt.value"
          :description="data.executiveActions.supremeCourt.description"
          :source="data.executiveActions.supremeCourt.source"
        />
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-bold mb-6">Notable Policy Actions</h2>
      <div class="grid grid-cols-1 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-4">Major Legislative Achievements</h3>
          <ul class="list-disc ml-6 space-y-2">
            <li v-for="item in data.legislation" :key="item.title">
              {{ item.title }} - {{ item.description }}
              <span class="text-xs text-gray-500 block">Source: {{ item.source }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-bold mb-6">Notable Public Statements</h2>
      <div class="grid grid-cols-1 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-4">Significant Quotes</h3>
          <div class="space-y-4">
            <div v-for="quote in data.quotes" :key="quote.text" class="border-l-4 border-blue-600 pl-4">
              <p class="italic">"{{ quote.text }}"</p>
              <p class="text-sm text-gray-600">- {{ quote.date }} ({{ quote.context }})</p>
              <p class="text-xs text-gray-500">Source: {{ quote.source }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import StatCard from '~/components/StatCard.vue'

// Fetch data from our API endpoint
const { data, pending, error } = await useFetch('/api/trump-stats')
</script> 