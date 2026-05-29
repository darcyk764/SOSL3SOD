<template>
  <section class="max-w-6xl mx-auto px-6 py-14">

    <!-- HEADER -->
    <div class="text-center mb-12">
      <span class="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs">
      
      </span>

      <h2 class="text-5xl font-extrabold text-green-700 mt-4">
        About Rwanda
      </h2>

      <p class="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
        A modern tourism platform designed to showcase Rwanda’s beauty through destinations,
        culture, wildlife, and travel experiences.
      </p>
    </div>

    <!-- INTRO CARD + SMALL IMAGE -->
    <div class="grid md:grid-cols-2 gap-10 items-center mb-12">

      <!-- TEXT -->
      <div class="bg-green-50 p-8 rounded-3xl shadow-sm">
        <h3 class="text-2xl font-bold text-green-700 mb-3">
          Our Purpose
        </h3>

        <p class="text-gray-600 leading-relaxed">
          Tembera U Rwanda was created to make tourism in Rwanda easier to explore digitally.
          It brings together destinations, nature, and cultural experiences into one simple platform.
        </p>

        <p class="text-gray-600 leading-relaxed mt-4">
          From mountains to lakes, forests to wildlife parks, Rwanda offers unique experiences
          that this platform helps users discover in a modern and visual way.
        </p>
      </div>

      <!-- SMALL IMAGE -->
      <div class="rounded-3xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801"
          class="w-full h-[260px] object-cover"
          alt="Rwanda nature"
        />
      </div>

    </div>

    <!-- FEATURES -->
    <div class="grid md:grid-cols-3 gap-6 mb-12">

      <div class="bg-white shadow-md rounded-3xl p-6 hover:shadow-xl transition">
        <h3 class="text-green-700 font-bold text-xl">🌍 Tourism Focus</h3>
        <p class="text-gray-600 text-sm mt-2">
          Discover Rwanda’s destinations, parks, lakes, and cultural sites.
        </p>
      </div>

      <div class="bg-white shadow-md rounded-3xl p-6 hover:shadow-xl transition">
        <h3 class="text-green-700 font-bold text-xl">📸 Visual Experience</h3>
        <p class="text-gray-600 text-sm mt-2">
          Clean image-based storytelling for better exploration.
        </p>
      </div>

      <div class="bg-white shadow-md rounded-3xl p-6 hover:shadow-xl transition">
        <h3 class="text-green-700 font-bold text-xl">⚡ Modern UI</h3>
        <p class="text-gray-600 text-sm mt-2">
          Built with Vue.js and Tailwind CSS for speed and responsiveness.
        </p>
      </div>

    </div>

    <!-- RWANDA FACTS -->
    <div class="mb-12">

      <h3 class="text-3xl font-bold text-green-700 text-center mb-8">
        Why Rwanda?
      </h3>

      <div class="grid md:grid-cols-3 gap-6">

        <div class="p-6 bg-green-50 rounded-2xl">
          <h4 class="text-green-700 font-bold">🌄 Land of Hills</h4>
          <p class="text-gray-600 text-sm mt-2">
            Famous for its green hills and stunning landscapes.
          </p>
        </div>

        <div class="p-6 bg-green-50 rounded-2xl">
          <h4 class="text-green-700 font-bold">🦍 Wildlife</h4>
          <p class="text-gray-600 text-sm mt-2">
            Home to gorillas, lions, elephants, and diverse wildlife.
          </p>
        </div>

        <div class="p-6 bg-green-50 rounded-2xl">
          <h4 class="text-green-700 font-bold">🤝 Safe Country</h4>
          <p class="text-gray-600 text-sm mt-2">
            One of the safest and cleanest countries in Africa.
          </p>
        </div>

      </div>
    </div>

    <!-- FINAL CTA -->
    <div class="text-center bg-green-700 text-white rounded-3xl p-10">

      <h3 class="text-3xl font-bold mb-3">
        Start Exploring Rwanda Today
      </h3>

      <p class="text-gray-200 max-w-2xl mx-auto">
        Discover destinations, culture, and nature through a simple and modern experience.
      </p>

    </div>

    <!-- FOOTER -->
    <div class="text-center text-gray-500 text-sm mt-10">
      Built with Vue.js & Tailwind CSS • Tembera U Rwanda Project
    </div>

  </section>
</template>