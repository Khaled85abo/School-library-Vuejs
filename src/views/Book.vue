<template>
  <div id="book" v-if="book">
    <div class="back-btn-div">
      <div class="back-btn" @click="$router.go(-1)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
          <path
            d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"
          />
        </svg>
      </div>
    </div>
    <div class="book-info">
      <div class="book-cover">
        <div class="vertical-line"></div>
        <div class="title-author">
          <p>{{ book.Title }}</p>
          <p>{{ book.Author }}</p>
        </div>
      </div>
      <div class="book-details">
        <div>
          <h1>{{ book.Title }}</h1>
          <h5>{{ book.Author }}</h5>
        </div>
        <p>{{ book.Plot }}</p>
        <div class="info-details">
          <div>
            <div>
              <span>Audience: </span>
              <span>{{ book.Audience }}</span>
            </div>
            <div>
              <span>Pages: </span>
              <span>{{ book.Pages }}</span>
            </div>
          </div>
          <div>
            <div>
              <span>First published: </span>
              <span>{{ book.Year }}</span>
            </div>
            <div>
              <span>Publisher: </span>
              <span>{{ book.Publisher }}</span>
            </div>
          </div>
        </div>
        <button @click="$emit('add', book)">Oh, I want to read it!</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["books"],
  name: "Book",
  computed: {
    book() {
      return this.books[this.$route.params.id];
    },
  },
};
</script>

<style lang="scss" scoped>
#book {
  background: #222222;
  min-height: 80vh;
  display: grid;
  grid-template-rows: 40px 1fr;
  place-items: center;
  .back-btn-div {
    width: 700px;
    padding: 1rem;
    margin-top: 2rem;
    .back-btn {
      cursor: pointer;
      background: #dfdddd;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      place-self: baseline;
    }
  }
}
.book-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  .book-cover {
    height: 400px;
    width: 300px;
    background: #a8e2c0;
    margin: auto;
    display: grid;
    grid-template-columns: 25px 1fr;
    .vertical-line {
      height: 100%;
      width: 2px;
      background: rgba(0, 0, 0, 0.2);
      margin-left: 25px;
    }
    .title-author {
      align-self: end;
      text-align: left;
      margin: 0 0 1rem 1rem;
    }
  }
  .book-details {
    color: #ffffff;
    max-width: 400px;
    height: 400px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 0.9rem;
    }
    .info-details {
      padding: 1rem;
      background: #2f2f2f;
      display: flex;
      justify-content: space-between;
      div {
        div:first-of-type {
          margin-bottom: 1rem;
        }
      }
    }
    button {
      max-width: 200px;
      height: 50px;
      border-radius: 4px;
      border: none;
    }
  }
}
/* 
@media (min-width: 768px) {
  .book-info {
    display: flex;
    flex-direction: column;
  }
} */
</style>
