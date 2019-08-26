<template>
  <div class="searchQuote">
    <h3>Search for a Quote:</h3>
    <p>
      <strong>{{author}}</strong>
    </p>
    <p>
      <strong>{{body}}</strong>
    </p>
  </div>
</template>


<script>
export default {
  name: "searchQuote",
  data() {
    return {
      author: null,
      body: null
    };
  },
  created: function() {
    this.author = this.posts.quote.author;
    this.body = this.posts.quote.body;
  }
};
</script>
