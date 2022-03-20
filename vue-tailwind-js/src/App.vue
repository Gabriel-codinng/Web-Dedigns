<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Dashboard from "./views/layaouts/Dashboard.vue";
import Footer from "./views/layaouts/Footer.vue";
</script>

<template>
  <div class="grid grid-cols-12 grid-rows-12">
    <Dashboard />
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <Footer />
</template>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.3s ease-in;
}
</style>
