<script>
import previewCard from "@/components/previewCard.vue";
import axios from "axios";
import YouTubePlayer from "youtube-player";
import Titles from "@/components/Titles.vue";

//Insert your API
const apiKey = import.meta.env.VITE_APP_YOUTUBE_API_KEY;
const apiURL = "https://www.googleapis.com/youtube/v3/search";

export default {
  name:'Home',
  components:{Titles, previewCard},
  data(){
    return{
      search_text:null,
      search_result: [],
      dialog:false,
      player:null
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
    },

    playVideo(videoId){
      this.dialog = true;
      setTimeout(()=>{
        this.player = YouTubePlayer(this.$refs.playTag,{
          videoId:videoId,
          width:"100%",
          height:"1024",
          playerVars:{
            autoplay:true
          }
        },1000);
      });
    }

  }

}

</script>



<template>
  <div >
    <Titles title=""/>
    <v-responsive
      class="mx-auto mb-5 text-center"
      max-width="500"
    >
      <v-text-field
        class="mt-3"
        clearable
        label="Search Episodes"
        prepend-icon="mdi mdi-multimedia"
        variant="outlined"
        v-model="search_text"
      ></v-text-field>

      <v-btn
        prepend-icon=""
        append-icon=""
        color="green-darken-1"
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
                         :channel="n.snippet.channelTitle"
                         :thumb="n.snippet.thumbnails.high.url"
                         @trigger="playVideo(n.id.videoId)"
            >

            </previewCard>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <v-row justify="center" >
      <v-dialog

        v-model="dialog"
        persistent
        width="80%"
      >
        <v-card>
          <v-card-title class="mt-1 ml-2">
            <span class="text-h5">YouTube</span>
          </v-card-title>


          <div ref="playTag"></div>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              class="mr-2"
              size="small"
              color="orange"
              variant="flat"
              @click="dialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

  </div>
</template>
