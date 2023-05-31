<script>

export default {
  name: "NewsSheet",
  props:{
    title:null,
    date:null,
    content:null,
    imageUrl:null,
    readMoreUrl:null,
  }
}
</script>

<template>
  <v-container >
    <v-row>
      <v-col cols="12" md="5">
        <v-img class="mx-auto mt-8"
               :src="imageUrl"
               width="80%"  >
        </v-img>
      </v-col>

      <v-col cols="12" md="7" class="mx-auto pa-10">
        <h3 >
          {{title}}
        </h3>
        <h6 class="mb-4">{{date}}</h6>

        <p class="mb-4">{{content}}</p>

        <a :href="readMoreUrl" target="_blank">
          <v-btn
            class="text"
            color="info"
            rounded="1"
            size="small"
            variant="flat"
          >
            read more
          </v-btn>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
