<script >
import Titles from "@/components/Titles.vue";
import axios from "axios";

const apiURL = "http://numbersapi.com/"
export default {
  name:"Numbers",
  components: {Titles},
  data: () => ({
    items: [],
    number:null,
    type:null
  }),
  methods:{
    async callNumberAPI(){
       const respond = await axios.get(apiURL+this.number+'/'+this.type);
       this.items.push(
         {
           color: 'info',
           icon: 'mdi-information',
           res: respond.data
         }
       )
    }
  }
}

</script>

<template>

  <Titles title="Numbers Data"/>
  <v-container class="">
    <v-row align="center">
      <v-col cols="12" sm="6">
        <v-row style="height: 100px" align="center" no-gutters>
            <v-text-field
              v-model="number"
              clearable
              label="Type Number"
              prepend-icon="mdi mdi-counter"
              variant="outlined"
            ></v-text-field>
        </v-row>
        <v-row style="height: 100px" align="center" no-gutters>
            <v-select
              v-model="type"
              chips
              label="Select Type"
              prepend-icon="mdi mdi-format-list-bulleted-type"
              :items="['trivia', 'math', 'date', 'year']"
              variant="outlined"
            ></v-select>
        </v-row>
        <v-row justify="center">
          <v-btn @click="callNumberAPI">Try this</v-btn>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" style="overflow-y: auto; height: 500px">
        <v-timeline side="end">
          <v-timeline-item
            v-for="item in items"
            :key="item.res"
            :dot-color="item.color"
            size="small"
          >
            <v-alert
              :value="true"
              :color="item.color"
              :icon="item.icon"
            >
              {{item.res}}
            </v-alert>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>

  </v-container>
</template>

<style scoped>

</style>
