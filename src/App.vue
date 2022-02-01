<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/books">Books</router-link>
    </div>
    <router-view :books="books" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      books: null,
    };
  },
  mounted() {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => (this.books = data));
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    padding: 0.5rem 1rem;
    background: aqua;
    border-radius: 8px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
