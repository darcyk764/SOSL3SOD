<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- NAVBAR -->
    <header
      class="bg-green-600 text-white px-6 py-4 flex items-center justify-between shadow-md"
    >
      <!-- LOGO -->
      <div class="flex items-center gap-3">
        <img src="/logo.svg" alt="Logo" class="w-9 h-9" />
        <h1 class="text-xl font-bold tracking-wide">
          TEMBERA RWANDA
        </h1>
      </div>

      <!-- NAV LINKS -->
      <nav class="flex items-center gap-3 text-sm font-medium">
        <router-link
          to="/"
          class="px-3 py-2 rounded-md hover:bg-white/20 transition"
        >
          Home
        </router-link>

        <router-link
          to="/about"
          class="px-3 py-2 rounded-md hover:bg-white/20 transition"
        >
          About
        </router-link>

        <!-- DESTINATIONS -->
        <div class="relative group">
          <button
            class="px-3 py-2 rounded-md hover:bg-white/20 transition"
          >
            Destinations
          </button>

          <div
            class="absolute left-0 top-full hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-lg w-48 overflow-hidden z-50"
          >
            <button
              v-for="p in provinces"
              :key="p.id"
              @click="goToProvince(p)"
              class="w-full text-left px-4 py-3 hover:bg-gray-100 transition"
            >
              {{ p.name }}
            </button>
          </div>
        </div>

        <router-link
          to="/services"
          class="px-3 py-2 rounded-md hover:bg-white/20 transition"
        >
          Services
        </router-link>

        <!-- GALLERY -->
        <div class="relative group">
          <button
            class="px-3 py-2 rounded-md hover:bg-white/20 transition"
          >
            Gallery
          </button>

          <div
            class="absolute left-0 top-full hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-lg w-40 overflow-hidden z-50"
          >
            <button
              @click="goToGallery('images')"
              class="w-full text-left px-4 py-3 hover:bg-gray-100 transition"
            >
              Images
            </button>

            <button
              @click="goToGallery('videos')"
              class="w-full text-left px-4 py-3 hover:bg-gray-100 transition"
            >
              Videos
            </button>
          </div>
        </div>

        <router-link
          to="/contact"
          class="px-3 py-2 rounded-md hover:bg-white/20 transition"
        >
          Contact
        </router-link>
      </nav>
    </header>

    <!-- PAGE CONTENT -->
    <main class="flex-grow w-full max-w-6xl mx-auto p-6">
      <router-view />
    </main>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Footer from './components/Footer.vue'

const router = useRouter()

const provinces = [
  { id: 1, name: 'Northern Province' },
  { id: 2, name: 'Western Province' },
  { id: 3, name: 'Eastern Province' },
  { id: 4, name: 'Southern Province' }
]

const goToProvince = (province) => {
  router.push(`/destinations?province=${province.id}`)
}
const goToGallery = (type) => {
  router.push(`/gallery?type=${type}`)
}

</script>