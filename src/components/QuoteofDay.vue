
<template>
  <div class="quoteofday">
    <h1>Quote of the Day!</h1>
    <div v-if="posts && posts.quote">
      <h2>{{ posts.quote.body }}</h2>
      <h3>{{posts.quote.author}}</h3>
    </div>
    <form v-on:submit.prevent="getQuote(query)"></form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "quoteofDay",
  data() {
    return {
      msg: "Quote of Day",
      posts: null
    };
  },
  created() {
    axios
      .get(` https://favqs.com/api/qotd`)
      .then(response => {
        this.posts = response.data;
        console.log(this.posts);
      })
      .catch(e => {
        this.errors.push(e);
      });
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
