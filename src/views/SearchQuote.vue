<template>
  <form v-on:submit.prevent="getQuote">
    <h3>Search for Quote:</h3>
    <input type="text" v-model="query" placeholder />
    <button type="submit">Go</button>
  </form>
</template>
<script>
import axios from "axios";
export default {};
</script>