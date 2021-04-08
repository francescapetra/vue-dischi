 var app = new Vue(
  {
    el:"#root",
    data:{
      albums: [],
      categories: ["all"],
    },
    methods:{
      prova: function(){
      }
    },
    mounted: function(){
      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((request) =>{
      const result = request.data.response;
      this.albums = result;
      });
    },
    computed: {
      searchGenre() {
        this.albums.forEach((genere) => {
          if (this.categories.includes(genere.genre) == false) {
            this.categories.push(genere.genre);
          }
        });
    }
  },
  }
);
