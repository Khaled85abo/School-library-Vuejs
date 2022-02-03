import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    list: [{ Title: "test title" }],
    showList: false,
    books: [],
  },
  actions: {
    fetchBooks(context) {
      fetch("/books.json")
        .then((res) => res.json())
        .then((data) => context.commit("setBooks", data));
    },
  },
  mutations: {
    mutateState(state, action) {
      switch (action.type) {
        case "set-books":
          state.books = action.payload;
          break;
        case "add-to-list":
          state.list.push(action.payload);
          break;
        case "toggle-list":
          state.showList = !state.showList;
          break;
        case "delete-item":
          state.list.splice(action.payload, 1);
          break;
        default:
          break;
      }
    },
    setBooks(state, payload) {
      state.books = payload;
    },
    addToList(state, book) {
      const listBook = state.list.filter((bo) => bo.Title === book.Title);
      if (listBook.length === 0) state.list.push(book);

      state.showList = true;
      setTimeout(() => {
        state.showList = false;
      }, 1500);
    },
    toggleList(state) {
      state.showList = !state.showList;
    },
    deleteItem(state, index) {
      state.list.splice(index, 1);
    },
  },
  // Similar to computed in components.
  getters: {},
});

export default store;
