<template>
  <v-app class="grey lighten-4">
    <NavbarComponent />
    <v-main class="mx-4 mb-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent';

export default {
  name: 'App',
  components: { NavbarComponent },
};
</script>

<style>
#app {
    background-color: var(--v-background-base) !important;
}
</style>
