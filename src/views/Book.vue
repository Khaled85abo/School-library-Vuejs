<template>
  <div>
    {{ book.Title }}
  </div>
</template>

<script>
export default {
  props: ["books"],
  data() {
    return {
      book: null,
    };
  },
  name: "Book",
  beforeMount() {
    console.log(this.$route.params.id);
    const book = this.books[this.$route.params.id];
    this.book = book;
  },
};
</script>

<style></style>
