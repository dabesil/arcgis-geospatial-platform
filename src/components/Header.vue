<script>
export default {
  name: 'HeaderVue',
  data() {
    return {
      titulo: 'arcgis geospatial platform',
    }
  },
}
</script>
<template>
  <v-layout>
    <v-app-bar :elevation="7" style="position: relative">
      <v-app-bar-title>{{ titulo }}</v-app-bar-title>
      <v-btn id="filter-btn" icon="mdi-filter"></v-btn>
      <v-btn icon="mdi-menu" @click="this.$store.commit('changeDrawerVisibility')"></v-btn>
    </v-app-bar>
  </v-layout>
</template>
<style>
.v-app-bar {
  background-color: #212121 !important;

  .v-icon,
  .v-app-bar-title {
    color: aliceblue;
  }
}
</style>
