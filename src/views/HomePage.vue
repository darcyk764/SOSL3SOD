<script setup></script>

<template>
  <div class="bg-white">

    <!-- HERO -->
    <section
      class="relative h-screen bg-cover bg-center flex items-center justify-center"
      style="background-image: url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee');"
    >
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative text-center px-6 max-w-4xl text-white">
        <span class="bg-green-600 px-4 py-1 rounded-full text-xs">
          Explore Africa’s Gem
        </span>

        <h1 class="text-6xl md:text-7xl font-extrabold mt-4">
          RWANDA
        </h1>

        <p class="text-xl md:text-2xl text-gray-200 mt-6">
          The Land of a Thousand Hills — nature, wildlife, culture, and unforgettable adventure.
        </p>

        <div class="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <button class="px-7 py-3 bg-green-600 hover:bg-green-700 rounded-full font-semibold">
            Explore Destinations
          </button>

          <button class="px-7 py-3 border border-white rounded-full hover:bg-white/10">
            View Gallery
          </button>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 py-16 text-center">

      <div>
        <h2 class="text-3xl font-bold text-green-700">4</h2>
        <p class="text-gray-600">Provinces</p>
      </div>

      <div>
        <h2 class="text-3xl font-bold text-green-700">1000+</h2>
        <p class="text-gray-600">Hills</p>
      </div>

      <div>
        <h2 class="text-3xl font-bold text-green-700">20+</h2>
        <p class="text-gray-600">Parks</p>
      </div>

      <div>
        <h2 class="text-3xl font-bold text-green-700">∞</h2>
        <p class="text-gray-600">Experiences</p>
      </div>

    </section>

    <!-- FEATURE CARDS -->
    <section class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-16">

      <div class="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <img class="h-60 w-full object-cover" src="https://images.unsplash.com/photo-1516426122078-c23e76319801" />
        <div class="p-6">
          <h3 class="text-green-700 font-bold text-xl">Wildlife Safari</h3>
          <p class="text-gray-600 mt-2 text-sm">Explore lions, elephants, and giraffes in Akagera.</p>
        </div>
      </div>

      <div class="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <img class="h-60 w-full object-cover" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" />
        <div class="p-6">
          <h3 class="text-green-700 font-bold text-xl">Mountains</h3>
          <p class="text-gray-600 mt-2 text-sm">Green hills and volcano landscapes everywhere.</p>
        </div>
      </div>

      <div class="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <img class="h-60 w-full object-cover" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e" />
        <div class="p-6">
          <h3 class="text-green-700 font-bold text-xl">Culture</h3>
          <p class="text-gray-600 mt-2 text-sm">Discover Rwanda’s traditions and heritage.</p>
        </div>
      </div>

    </section>

    <!-- QUOTE -->
    <section class="bg-green-700 text-white text-center py-16 px-6">
      <h2 class="text-3xl md:text-4xl font-bold">
        “Rwanda is not a destination, it is an experience.”
      </h2>
    </section>

    <!-- CTA -->
    <section class="text-center py-16">
      <h2 class="text-3xl font-bold text-green-700 mb-3">
        Start Your Journey
      </h2>

      <p class="text-gray-600 mb-6">
        Discover Rwanda’s beauty through travel, culture, and nature.
      </p>

      <button class="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700">
        Get Started
      </button>
    </section>

  </div>
</template>