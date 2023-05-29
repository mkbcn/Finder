<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi mdi-cable-data" />

      Finder
    </v-app-bar-title>
    <v-spacer></v-spacer>

    <v-btn to="/videos" >
      <v-icon icon="mdi mdi-video-box" /> Videos
    </v-btn>

    <v-btn to="/news" >
      <span class="mdi mdi-newspaper-variant-multiple-outline"></span> News
    </v-btn>

    <v-btn to="/numbers" class="mr-5" >
      <span class="mdi mdi-ticket-confirmation-outline"></span>Numbers
    </v-btn>

  </v-app-bar>
</template>

<script setup>
  //
</script>
