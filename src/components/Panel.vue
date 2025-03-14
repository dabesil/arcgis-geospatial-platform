<script>
import MapVue from './Map.vue'
import HeaderVue from './Header.vue'
import FilterVue from './Filter.vue'
import DrawerVue from './Drawer.vue'

export default {
  name: 'PanelVue',
  components: {
    MapVue,
    HeaderVue,
    FilterVue,
    DrawerVue,
  },
  methods: {
    searchBairro(query, callback) {
      this.$refs.mapView.applyFilter(query, callback)
    },
  },
}
</script>
<template>
  <section class="panel">
    <HeaderVue />
    <FilterVue @searchBairro="searchBairro" />
    <div class="principal">
      <MapVue ref="mapView" />
      <DrawerVue />
    </div>
  </section>
</template>
<style>
.panel {
  background-color: white;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
