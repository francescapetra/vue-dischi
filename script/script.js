 var app = new Vue(
  {
    el:"#root",
    data:{
      albums: [

      ],
    },
    methods:{
    },
    mounted: function(){
      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((request) =>{
      const result = request.data.response;
      this.albums = result;
      });
    }
  }
);
