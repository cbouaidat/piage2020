<template>
<div>
  <h1>{{ msg }}</h1>

    <h1>{{ loc }}</h1>
     <h1>{{ getloc }}</h1>

</div>
</template>

<script>
import { mapGetters,   mapActions  } from 'vuex';

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
   
  methods:{   
      ...mapActions(['getLocalisation']),
    // ...mapGetters(["getAllLocalisations"]),

   getloc(){
      return this.getLocalisation
    }, 

 
  },
computed: {
  ...mapGetters(["getAllLocalisations"]),
  loc() {
    return this.getAllLocalisations
  },

}

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
