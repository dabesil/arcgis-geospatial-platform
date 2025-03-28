import { createStore } from 'vuex'

export default createStore({
  state: {
    mapView: {},
    drawer: false,
    data: {},
  },
  mutations: {
    defineMap(state, mapView) {
      state.mapView = mapView
    },
    changeDrawerVisibility(state) {
      state.drawer = !state.drawer
    },
    setDrawer(state, value) {
      state.drawer = value
    },
    changeData(state, attributes) {
      state.data.id = attributes.id
      state.data.bairro = attributes.bairro
      state.drawer = true
    },
  },
  getters: {
    mapView: (state) => {
      return state.mapView
    },
    layerBairro: (state) => {
      return state.mapView.map.layers.items[3]
    },
  },
})
