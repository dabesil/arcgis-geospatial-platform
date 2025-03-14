<script>
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import Expand from '@arcgis/core/widgets/Expand'
import LayerList from '@arcgis/core/widgets/LayerList'
import Legend from '@arcgis/core/widgets/Legend'
import { shallowReactive } from 'vue'

export default {
  name: 'MapVue',
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      const map = new Map({
        basemap: import.meta.env.VITE_BASEMAP,
        layers: this.initLayers(),
      })

      const view = shallowReactive(
        new MapView({
          container: 'map-view',
          center: [-51.215, -30.045],
          zoom: 12,
          map: map,
        }),
      )

      view.ui.add(this.initExpand(view), 'top-left')
      view.ui.add(this.initLegend(view), 'bottom-left')

      this.$store.commit('defineMap', view)
      this.configureLayerBairro()
    },
    initLayers() {
      const popup = {
        title: 'Bairro: {bairro}',
        fontSize: 12,
      }

      const bairros = new FeatureLayer({
        url: import.meta.env.VITE_ARCGIS_API_LAYER_BAIRROS_URL,
        outFields: ['objectid', 'bairro'],
        popupTemplate: popup,
        visible: true,
        definitionExpression: '1=1',
      })

      const eixos = new FeatureLayer({
        url: import.meta.env.VITE_ARCGIS_API_LAYER_EIXOS_URL,
        visible: false,
      })

      const planejamento = new FeatureLayer({
        url: import.meta.env.VITE_ARCGIS_API_LAYER_PLANEJAMENTO_URL,
        visible: false,
      })

      const pontos = new FeatureLayer({
        url: import.meta.env.VITE_ARCGIS_API_LAYER_PONTOS_URL,
        visible: false,
      })

      return [pontos, planejamento, eixos, bairros]
    },
    initExpand(view) {
      var layerList = new LayerList({
        view: view,
      })

      var expand = new Expand({
        view: view,
        content: layerList,
        expanded: false,
      })

      return expand
    },
    initLegend(view) {
      var legend = new Legend({
        view: view,
      })

      return legend
    },
    applyFilter(bairro, callback) {
      const layer = this.$store.getters.layerBairro
      const query = `bairro = '${bairro}'`

      layer
        .queryFeatures({
          where: query,
          outFields: ['objectid', 'bairro'],
          returnGeometry: true,
        })
        .then((result) => {
          if (result.features.length > 0) {
            const feature = result.features[0]

            this.$store.getters.mapView.goTo(feature.geometry.extent)
            this.$store.getters.mapView.openPopup({
              features: [feature],
              location: feature.geometry.centroid,
            })
            this.$store.commit('changeData', {
              id: feature.attributes.objectid,
              bairro: feature.attributes.bairro,
            })
          }
        })
        .catch((error) => {
          console.error(error)
        })
      callback()
    },
    configureLayerBairro() {
      const mapView = this.$store.getters.mapView
      const layer = this.$store.getters.layerBairro

      mapView.on('click', (event) => {
        mapView.hitTest(event).then((res) => {
          const graphic = res.results[0]?.graphic

          if (graphic.layer === layer) {
            this.$store.commit('changeData', {
              id: graphic.attributes.objectid,
              bairro: graphic.attributes.bairro,
            })
          } else {
            this.$store.commit('closeDrawer')
          }
        })
      })
    },
  },
}
</script>
<template>
  <div id="map-view" class="map-view"></div>
</template>
<style>
@import 'https://js.arcgis.com/calcite-components/3.0.3/calcite.css';
@import 'https://js.arcgis.com/4.32/@arcgis/core/assets/esri/themes/light/main.css';
@import 'https://js.arcgis.com/map-components/4.32/arcgis-map-components.css';

.map-view {
  height: 92vh;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  position: relative;
}

.esri-widget {
  scale: 0.895;
}

.esri-popup--shadow {
  box-shadow: none;
}
</style>
