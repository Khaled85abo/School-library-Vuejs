<template>
  <div class="books-container">
    <article
      v-for="(book, index) of books"
      v-on:click="showSingleBook(index)"
      :key="index"
      :style="{
        background:
          'rgba(' +
          Math.floor(Math.random() * 25) * index +
          ', ' +
          (Math.floor(Math.random() * 25) / 2) * index +
          ', ' +
          Math.ceil(Math.random() * 25) * index +
          ', 0.3)',
      }"
    >
      <div class="left-line"></div>
      <div>
        <p>
          {{ book.Title }}
        </p>
        <p>{{ book.Author }}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Books",
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  methods: {
    showSingleBook(id) {
      this.$router.push(`/book/${id}`);
    },
  },
};
</script>

<style scoped lang="scss">
.books-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
article {
  position: relative;
  text-align: left;
  padding: 0.5rem 1rem 0.5rem 1.7rem;
  cursor: pointer;
  margin: 1rem;
  height: 300px;
  width: 200px;
  border: 2px dotted rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: flex-end;

  .left-line {
    height: 100%;
    width: 4px;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    left: 0.9rem;
    bottom: 0;
  }
  p:first-of-type {
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
  }
  p:last-of-type {
    font-size: 0.7rem;
  }
}
</style>
