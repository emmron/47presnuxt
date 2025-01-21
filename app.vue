<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-blue-900 text-white">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <h1 class="text-2xl font-bold">Trump Presidency Statistics</h1>
          <div class="hidden md:flex space-x-4">
            <NuxtLink to="/" class="hover:text-blue-200">Overview</NuxtLink>
            <NuxtLink to="/executive-orders" class="hover:text-blue-200">Executive Orders</NuxtLink>
            <NuxtLink to="/economy" class="hover:text-blue-200">Economy</NuxtLink>
            <NuxtLink to="/foreign-policy" class="hover:text-blue-200">Foreign Policy</NuxtLink>
          </div>
        </div>
      </div>
    </nav>
    <main class="container mx-auto p-4">
      <NuxtPage />
    </main>
    <footer class="bg-gray-800 text-white py-4 mt-8">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm">Data sourced from official government records and reputable sources</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Main app setup
</script>
