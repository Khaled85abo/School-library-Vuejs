import Vue from "vue";
import Vuex from "vuex";
import {
  SET_BOOKS,
  ADD_TO_LIST,
  DELETE_ITEM,
  TOGGLE_LIST,
  FETCH_BOOKS,
  STATE_REDUCER,
} from "../constants";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    list: [{ Title: "test title" }],
    showList: false,
    books: [],
  },
  actions: {
    actionsReducer(context, action) {
      switch (action.type) {
        case FETCH_BOOKS:
          fetch("/books.json")
            .then((res) => res.json())
            .then((data) =>
              context.commit(STATE_REDUCER, { type: SET_BOOKS, payload: data })
            );
          break;
        case ADD_TO_LIST:
          context.commit(STATE_REDUCER, {
            type: ADD_TO_LIST,
            payload: action.payload,
          });
          break;
        case TOGGLE_LIST:
          context.commit(STATE_REDUCER, { type: TOGGLE_LIST });
          break;
        case DELETE_ITEM:
          context.commit(STATE_REDUCER, {
            type: DELETE_ITEM,
            payload: action.payload,
          });
          break;
        default:
          break;
      }
    },
  },
  mutations: {
    stateReducer(state, action) {
      switch (action.type) {
        case SET_BOOKS:
          state.books = action.payload;
          break;
        case ADD_TO_LIST: {
          const listBook = state.list.filter(
            (bo) => bo.Title === action.payload.Title
          );
          if (listBook.length === 0) state.list.push(action.payload);
          state.showList = true;
          setTimeout(() => {
            state.showList = false;
          }, 1500);
          console.log(state.list);
          break;
        }
        case TOGGLE_LIST:
          state.showList = !state.showList;
          break;
        case DELETE_ITEM:
          state.list.splice(action.payload, 1);
          break;
        default:
          break;
      }
    },
  },
  // Similar to computed in components.
  getters: {},
});

export default store;
