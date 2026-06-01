<template>
  <div class="bg-white">

    <!-- HERO -->
    <section class="relative h-screen flex items-center justify-center text-white overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99"
        class="absolute w-full h-full object-cover scale-110"
      />

      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative text-center max-w-4xl px-6">

        <h1 class="text-6xl md:text-7xl font-extrabold tracking-wide">
          DISCOVER RWANDA
        </h1>

        <p class="mt-6 text-lg text-gray-200">
          The Land of a Thousand Hills — wildlife, lakes, volcanoes & culture.
        </p>

        <div class="mt-8 flex gap-4 justify-center">
          <button class="bg-green-600 px-7 py-3 rounded-full hover:bg-green-700 transition">
            Explore Now
          </button>

          <button class="border border-white px-7 py-3 rounded-full hover:bg-white/10">
            View Gallery
          </button>
        </div>

      </div>
    </section>

    <!-- DESTINATION HIGHLIGHTS -->
    <section class="max-w-6xl mx-auto px-6 py-20">

      <h2 class="text-4xl font-bold text-green-700 text-center mb-12">
        Top Destinations in Rwanda
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <!-- Volcanoes -->
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Volcanoes_National_Park_Rwanda.jpg" />
          <h3>Volcanoes National Park</h3>
          <p>Home of mountain gorillas and volcano landscapes.</p>
        </div>

        <!-- Lake Kivu -->
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Lake_Kivu_Rwanda.jpg" />
          <h3>Lake Kivu</h3>
          <p>Beautiful beaches, islands, and relaxing waters.</p>
        </div>

        <!-- Nyungwe -->
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Nyungwe_Forest_Canopy_Walk.jpg" />
          <h3>Nyungwe Forest</h3>
          <p>Ancient rainforest with canopy walk adventures.</p>
        </div>

      </div>
    </section>

    <!-- AKAGERA -->
    <section class="bg-gray-50 py-20">
      <div class="max-w-6xl mx-auto px-6">

        <h2 class="text-4xl font-bold text-green-700 text-center mb-10">
          Wildlife Experience
        </h2>

        <div class="grid md:grid-cols-2 gap-8 items-center">

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Akagera_National_Park_Lion.jpg"
            class="rounded-3xl shadow-xl"
          />

          <div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">
              Akagera National Park
            </h3>

            <p class="text-gray-600 leading-relaxed">
              Experience lions, elephants, giraffes, zebras, and hippos in Rwanda’s
              only savannah national park.
            </p>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.card {
  @apply bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2;
}

.card img {
  @apply h-56 w-full object-cover;
}

.card h3 {
  @apply p-4 text-green-700 font-bold text-xl;
}

.card p {
  @apply px-4 pb-4 text-gray-600 text-sm;
}
</style>