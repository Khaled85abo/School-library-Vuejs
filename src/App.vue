<template>
  <div id="app">
    <header>
      <div></div>
      <div id="nav">
        <router-link to="/">Home</router-link>
        | <router-link to="/about">About</router-link> |
        <router-link to="/books">Books</router-link>
      </div>
      <div class="list-container">
        <svg
          @click="toggleList"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z"
          />
        </svg>
        <div class="list-component">
          <List v-if="showList" />
        </div>
      </div>
    </header>
    <router-view :books="books" />
  </div>
</template>
<script>
import List from "./components/List.vue";
import { TOGGLE_LIST, FETCH_BOOKS, ACTIONS_REDUCER } from "./constants";
export default {
  components: { List },
  data() {
    return {
      books: null,
    };
  },
  methods: {
    toggleList() {
      this.$store.dispatch(ACTIONS_REDUCER, { type: TOGGLE_LIST });
    },
  },
  computed: {
    showList() {
      return this.$store.state.showList;
    },
  },
  mounted() {
    this.$store.dispatch(ACTIONS_REDUCER, { type: FETCH_BOOKS });
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
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .list-container {
    position: relative;
    .list-component {
      position: absolute;
      transform: translateX(-50%);
      ul {
        background: lightgray;
        list-style: none;
        text-align: left;
        li {
          min-width: 250px;
          padding: 0.5rem 0.5rem;
          box-shadow: 0 0 8px 1px black;
        }
      }
    }
  }
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
