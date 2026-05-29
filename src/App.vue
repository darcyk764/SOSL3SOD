<template>
  <div class="w-full min-h-screen flex flex-col bg-gray-50">

    <!-- NAVBAR -->
    <header
      class="w-full bg-green-600 text-white shadow-md sticky top-0 z-50"
    >
      <div class="w-full flex items-center justify-between px-6 py-4">

        <!-- LOGO -->
        <div class="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="Logo"
            class="w-10 h-10 bg-white rounded-full p-1"
          />

          <h1 class="text-2xl font-bold tracking-wide">
            TEMBERA RWANDA
          </h1>
        </div>

        <!-- NAVIGATION -->
        <nav class="flex items-center gap-2 text-sm font-medium">

          <!-- HOME -->
          <router-link
            to="/"
            class="px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300"
          >
            Home
          </router-link>

          <!-- ABOUT -->
          <router-link
            to="/about"
            class="px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300"
          >
            About
          </router-link>

          <!-- DESTINATIONS -->
          <div class="relative group">

            <button
              class="px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300"
            >
              Destinations
            </button>

            <!-- DROPDOWN -->
            <div
              class="absolute left-0 top-full hidden group-hover:block bg-white text-gray-800 rounded-xl shadow-xl w-56 overflow-hidden"
            >
              <button
                v-for="province in provinces"
                :key="province.id"
                @click="goToProvince(province)"
                class="w-full text-left px-5 py-3 hover:bg-gray-100 transition"
              >
                {{ province.name }}
              </button>
            </div>
          </div>

          <!-- SERVICES -->
          <router-link
            to="/services"
            class="px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300"
          >
            Services
          </router-link>

          <!-- GALLERY -->
          <div class="relative group">

            <button
              class="px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300"
            >
              Gallery
            </button>

            <!-- DROPDOWN -->
            <div
              class="absolute left-0 top-full hidden group-hover:block bg-white text-gray-800 rounded-xl shadow-xl w-44 overflow-hidden"
            >
              <button
                @click="goToGallery('images')"
                class="w-full text-left px-5 py-3 hover:bg-gray-100 transition"
              >
                Images
              </button>

              <button
                @click="goToGallery('videos')"
                class="w-full text-left px-5 py-3 hover:bg-gray-100 transition"
              >
                Videos
              </button>
            </div>
          </div>

          <!-- CONTACT -->
          <router-link
            to="/contact"
            class="px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300"
          >
            Contact
          </router-link>

        </nav>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="flex-grow w-full">
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