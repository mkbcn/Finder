<script >
import Titles from "@/components/Titles.vue";
import axios from "axios";
import NewsSheet from "@/components/NewsSheet.vue";

const apiURL = import.meta.env.VITE_APP_NEWS_API_URL;
const apiKEY = import.meta.env.VITE_APP_NEWS_API_KEY;

export default {
  name:"News",
  components: {NewsSheet, Titles},
  data: () => ({
    items:[
      'all','business','sports','entertainment','health',
      'technology','science'
    ],
    val:null,
    category:"general",
    result:[]
  }),
  mounted() {
    this.callNewsAPI()
  },
  methods:{
    test(val){
      val==1 ? this.category="business" : this.category="general";
      val==2 ? this.category="sports" : null;
      val==3 ? this.category="entertainment" : null;
      val==4 ? this.category="health" : null;
      val==5 ? this.category="technology" : null;
      val==6 ? this.category="science" : null;
      this.callNewsAPI()
    },

    async callNewsAPI(){
      const respond = await axios.get(apiURL+this.category+"&apiKey="+apiKEY);
      this.result = respond.data.articles;
      //console.log(this.result);
      console.log(respond.data.articles);
    }

  }

}
</script>

<template>

    <Titles title="News API"/>
    <v-sheet elevation="6" class="mb-2">
      <v-tabs

        @click="test(this.val)"
        v-model="val"
        center-active
        bg-color="teal"
        next-icon="mdi mdi-arrow-right-thick"
        prev-icon="mdi mdi-arrow-left-thick"
        show-arrows
      >
        <v-tab
          v-for="i in items"
          :key="i"
        >
          {{ i }}
        </v-tab>
      </v-tabs>
    </v-sheet>

    <div  class="" style="overflow-y: auto; height: 600px; " >
      <v-container >
        <v-row style="">
          <v-col
            v-for="n in result"
            :key="n"
            cols="12"
            sm="12"
          >
            <v-sheet
              border="lg opacity-12"
              class="text-body-2 mx-10 my-3"
              max-width="1000"
            >
              <NewsSheet :title="n.title"
                         :date="n.publishedAt"
                         :content="n.content"
                         :image-url="n.urlToImage"
                         :read-more-url="n.url">

              </NewsSheet>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

    </div>

</template>

<style>
</style>
