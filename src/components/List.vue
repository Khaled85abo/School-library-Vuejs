<template>
  <ul>
    <li v-for="(book, index) of list" :key="index">
      <span>{{ book.Title }}</span> <span @click="deleteItem(index)">X</span>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.list;
    },
  },
  methods: {
    deleteItem(index) {
      console.log(index);
      this.$store.commit("deleteItem", index);
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  display: flex;
  justify-content: space-between;
  span:last-of-type {
    cursor: pointer;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background: red;
    display: grid;
    place-items: center;
  }
}
</style>
