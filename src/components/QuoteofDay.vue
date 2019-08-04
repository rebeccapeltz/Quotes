
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>2 Things that are difficult in JavaScript</h2>
    <!-- <ol>
      <li>naming things</li>
      <li>recursion</li>
      <li>off-by-one errors</li>
    </ol> -->
  </div>
</template>

<script>
export default {
  name: 'QuoteofDay',
  props: {
    msg: String
  }
}
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
