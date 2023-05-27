<script >
export default {
  name: "previewCard",
  props:{
    title:null,
    date:null,
    channel:null,
    thumb:null
  }
}
</script>

<template>

    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img
        :src="thumb"
        height="200px"
        cover
      ></v-img>

      <v-card-title>
        {{title}}
      </v-card-title>

      <v-card-subtitle>
        {{channel}}
      </v-card-subtitle>

      <v-btn
        color="orange-lighten-2"
        variant="flat"
        class="ma-4"
        size="small"
      >
        Play
      </v-btn>
    </v-card>
</template>

<style scoped>

</style>
