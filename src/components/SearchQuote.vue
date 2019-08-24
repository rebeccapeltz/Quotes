<template>
  <div>
    <h3>Search for a Quote:</h3>
    <p>
      <router-link to="/">Quote of Day</router-link>
    </p>
    <p>
      <strong>{{author}}</strong>
    </p>
    <p>{{body}}</p>
  </div>
</template>


<script>
export default {
    name:"searchQuote",
    data(){
        return{
            author: null,
            body: null
        };
    },
    created: function(){
        this.author = this.$route.params.author;
        this.body = this.$route.params.body;
    }
};
</script>
