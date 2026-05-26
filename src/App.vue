<template>
  <div class="app-container">
    <header class="navbar">
      <div class="brand">
        <img src="/logo.svg" alt="Tembera logo" class="brand-logo" />
      </div>
      <nav>
        <router-link to="/" class="nav-link" active-class="active">Home</router-link>
        <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
        <router-link to="/image" class="nav-link" active-class="active">Image</router-link>
        <router-link to="/about" class="nav-link" active-class="active">About</router-link>
      </nav>
    </header>

    <main class="page-shell">
      <router-view />
    </main>
  </div>
</template>

<style>
:root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background: #f5f7fb;
}

body {
  margin: 0;
}

.app-container {
  min-height: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 10;
}

.brand {
  font-weight: 700;
  font-size: 1.1rem;
}

nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: #4a5568;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: background 0.2s ease, color 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  background: #edf2f7;
  color: #2b6cb0;
}

.page-shell {
  padding: 2rem 1.5rem;
  max-width: 960px;
  margin: 0 auto;
}
</style>
