<script>
export default {
  name: 'FilterVue',
  data() {
    return {
      statement: '',
      isActive: false,
    }
  },
  methods: {
    searchBairro() {
      this.$emit('searchBairro', this.statement.toUpperCase(), this.closeFilter)
    },
    closeFilter() {
      this.isActive = false
    },
  },
}
</script>
<template>
  <v-layout>
    <v-dialog ref="dialog" activator="#filter-btn" max-width="500" v-model="isActive">
      <template v-slot:default>
        <v-card rounded="lg">
          <v-card-title class="d-flex justify-center pa-4 text-h5">
            <div>Buscar Bairro</div>
          </v-card-title>
          <v-divider class="mb-1"></v-divider>
          <v-card-text class="pa-4">
            <v-text-field v-model="statement" label="Nome do Bairro"></v-text-field>
            <v-btn prepend-icon="mdi-magnify" block @click="searchBairro">Buscar</v-btn>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>
  </v-layout>
</template>
<style scoped></style>
