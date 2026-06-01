<template>
  <div class="min-h-screen flex flex-col bg-gray-50">

    <!-- NAVBAR -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">

      <div class="max-w-7xl mx-auto px-6">

        <div class="flex items-center justify-between h-20">

          <!-- LOGO -->
          <div class="flex items-center gap-3">

            <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-md">
              <img src="/logo.svg" class="w-8 h-8" />
            </div>

            <div>
              <h1 class="text-2xl font-extrabold text-green-700">
                Tembera U Rwanda
              </h1>
              <p class="text-xs text-gray-500">
                Discover The Land Of A Thousand Hills
              </p>
            </div>

          </div>

          <!-- MENU -->
          <nav class="hidden md:flex items-center gap-2 font-medium">

            <router-link to="/" class="nav-item" active-class="active">
              Home
            </router-link>

            <router-link to="/about" class="nav-item" active-class="active">
              About
            </router-link>

            <!-- DESTINATIONS -->
            <div class="relative group">
              <button class="nav-item">Destinations ▼</button>

              <div class="dropdown w-64">
                <button
                  v-for="province in provinces"
                  :key="province.id"
                  @click="goToProvince(province.id)"
                  class="dropdown-item"
                >
                  {{ province.name }}
                </button>
              </div>
            </div>

            <router-link to="/services" class="nav-item" active-class="active">
              Services
            </router-link>

            <!-- GALLERY -->
            <div class="relative group">
              <button class="nav-item">Gallery ▼</button>

              <div class="dropdown w-52">
                <button class="dropdown-item" @click="goToGallery('images')">
                  📸 Images
                </button>
                <button class="dropdown-item" @click="goToGallery('videos')">
                  🎥 Videos
                </button>
              </div>
            </div>

            <!-- CONTACT -->
            <router-link to="/contact" class="contact-btn">
              Contact
            </router-link>

            <!-- 🌍 LANGUAGE SWITCHER (FIXED INSIDE NAVBAR) -->
            <div class="relative group ml-2">

              <button class="nav-item flex items-center gap-1">
                🌍 {{ currentLang.label }} ▾
              </button>

              <div class="dropdown w-40 right-0 left-auto">
                <button
                  v-for="lang in languages"
                  :key="lang.code"
                  @click="changeLang(lang)"
                  class="dropdown-item"
                >
                  {{ lang.label }}
                </button>
              </div>

            </div>

          </nav>

          <!-- MOBILE -->
          <button @click="mobileMenu = !mobileMenu"
                  class="md:hidden text-3xl text-green-700">
            ☰
          </button>

        </div>
      </div>

      <!-- MOBILE MENU -->
      <div v-if="mobileMenu" class="md:hidden bg-white border-t">

        <router-link to="/" class="mobile-item">Home</router-link>
        <router-link to="/about" class="mobile-item">About</router-link>
        <router-link to="/services" class="mobile-item">Services</router-link>
        <router-link to="/contact" class="mobile-item">Contact</router-link>

      </div>

    </header>

    <main class="flex-grow">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useRouter } from "vue-router"
import Footer from "./components/Footer.vue"

const router = useRouter()
const mobileMenu = ref(false)

/* PROVINCES */
const provinces = [
  { id: 1, name: "Northern Province" },
  { id: 2, name: "Western Province" },
  { id: 3, name: "Eastern Province" },
  { id: 4, name: "Southern Province" }
]

const goToProvince = (id) =>
  router.push(`/destinations?province=${id}`)

const goToGallery = (type) =>
  router.push(`/gallery?type=${type}`)

/* 🌍 LANGUAGE SYSTEM */
const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "rw", label: "Kinyarwanda" }
]

const currentLanguage = ref("en")

const currentLang = computed(() =>
  languages.find(l => l.code === currentLanguage.value)
)

const changeLang = (lang) => {
  currentLanguage.value = lang.code
  localStorage.setItem("lang", lang.code)
}

/* restore language */
if (localStorage.getItem("lang")) {
  currentLanguage.value = localStorage.getItem("lang")
}
</script>

<style scoped>
.nav-item {
  @apply px-4 py-2 rounded-xl hover:bg-green-50 hover:text-green-700 transition;
}

.active {
  @apply bg-green-600 text-white;
}

.contact-btn {
  @apply bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition;
}

.dropdown {
  @apply absolute mt-2 hidden group-hover:block bg-white text-gray-800 rounded-2xl shadow-2xl overflow-hidden;
}

.dropdown-item {
  @apply w-full text-left px-4 py-3 hover:bg-green-50 transition;
}

.mobile-item {
  @apply block px-6 py-4 hover:bg-green-50;
}
</style>