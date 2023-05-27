<template>
  <div>
    <v-responsive
    class="mx-auto mb-5 text-center"
    max-width="500"
    >
      <v-text-field
      class="mt-3"
      clearable
      label="What would you like to watch?"
      prepend-icon="mdi mdi-multimedia"
      variant="outlined"
      v-model="search_text"
      ></v-text-field>

      <v-btn
        prepend-icon="mdi mdi-multimedia"
        append-icon="mdi mdi-multimedia"
        variant="tonal"
        @click="youtubeDataApi"
      >
        Explore
      </v-btn>
    </v-responsive>

    <v-container class="">
      <v-row no-gutters>
        <v-col
          v-for="n in search_result"
          :key="n"
          cols="12"
          sm="4"
        >
          <v-sheet class="ma-2 pa-2">
            <previewCard :title="n.snippet.title"
                         :date="n.snippet.publishTime"
                         :channel="n.snippet.channelTitle" :thumb="n.snippet.thumbnails.high.url">

            </previewCard>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import previewCard from "@/components/previewCard.vue";
import axios from "axios";
const apiKey = "Insert your youtube API";
const apiURL = "https://www.googleapis.com/youtube/v3/search";

export default {
  components:{previewCard},
  data(){
    return{
      search_text:null,
      search_result: []
    };
  },

  methods:{
    async youtubeDataApi(){
      const keyword = this.search_text;
      const response = await axios.get(apiURL,{
        params: {key:apiKey, part:'snippet', type:'video', q:keyword,
        maxResults:12}
      });
      this.search_result = response.data.items;
      console.log(this.search_result);
    }
  }

}

</script>
