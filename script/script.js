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
    },
    },
    mounted: function(){
      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((request) =>{
      const result = request.data.response;
      this.albums = result;
      this.searchGenre();
      });
    },
    computed: {
      sortedYear: function() {
        console.log(this.albums);
        function compare(a, b) {
          if (a.year < b.year)
            return -1;
          if (a.year > b.year)
            return 1;
          return 0;
          }
          return this.albums.sort(compare);
        }
      }
  }
);
