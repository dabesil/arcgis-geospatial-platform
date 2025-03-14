<script>
export default {
  name: 'DrawerVue',
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(value) {
        this.$store.commit('setDrawer', value)
      },
    },
  },
}
</script>
<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      elevation="7"
      width="300"
      style="height: 92vh; top: 64px; position: fixed"
    >
      <v-list-item lines="two" class="text-h5"> Dados do Bairro </v-list-item>
      <v-divider class="mb-1"></v-divider>
      <v-list-item lines="one" style="text-transform: capitalize">
        <b>ID</b>: {{ this.$store.state.data.id }} <br />
        <b>Bairro</b>: {{ this.$store.state.data.bairro }}
      </v-list-item>
    </v-navigation-drawer>
  </v-layout>
</template>
<style></style>
