<template>
  <div class="searchQuote">
    <form v-on:submit.prevent="findQuote">
      <div>
        <h3>You can search for a Quote from an Author!</h3>
        <br />
        <label>Enter Author name here:</label>
        <input type="search" v-model="body" placeholder="eg. Mark Twain" />
        <button type="submit">Search</button>
        <button type="reset">Clear</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "searchQuote",
  data() {
    return {
      author: null,
      body: null
    };
  },
  methods: {
    findQuote: function() {
      let params = { "filter": "Mark Twain", "type": "author" };
      let headers = {
        "Authorization": "Token token='533e74f5138651604d3a8a30491dca5c'"
      };
      axios
        .get("https://favqs.com/api/quotes/", headers, params)
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
