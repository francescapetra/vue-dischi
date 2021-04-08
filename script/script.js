 var app = new Vue(
  {
    el:"#root",
    data:{
      albums: [],
      categories: ["All"],
      select:"",
    },
    methods:{
      searchGenre: function() {
        this.albums.forEach((genere) => {
          if (this.categories.includes(genere.genre) == false) {
            this.categories.push(genere.genre);
          }
        });
    }
    },
    mounted: function(){
      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((request) =>{
      const result = request.data.response;
      this.albums = result;
      this.searchGenre();
      });
    },
  }
);
