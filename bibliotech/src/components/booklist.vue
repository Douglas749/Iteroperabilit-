<template>
  <div class="catalogue-container">
    <BookCard
      v-for="(book, index) in books"
      :key="index"
      v-bind="book"
      @borrow="borrow(book)"
      @view="view(book)"
      @edit="edit(book)"
      @delete="remove(book)"
    />
  </div>
</template>

<script>
import BookCard from './bookcard.vue'

export default {
  name: 'BookList',
  components: {
    BookCard
  },
  data() {
    return {
      books: [
        {
          cover: './public/images/chevre.jpg',
          title: 'chevre de Ma mere',
          author: 'J.R.R. Tolkien',
          genre: 'Fantasy',
          isbn: '978-2-07-061317-4',
          available: 2,
          total: 3
        },
        {
          cover: '/public/images/ml.jpg',
          title: "Developpement personnel",
          author: 'Robert Kyosaki',
          genre: 'Littérature',
          isbn: '978-2-07-036002-1',
          available: 0,
          total: 2
        },
        {
          cover: '/public/images/mli.jpg',
          title: 'Dune',
          author: 'Frank Herbert',
          genre: 'Science-Fiction',
          isbn: '978-2-266-32150-7',
          available: 3,
          total: 4
        },
        {
          cover: '/public/images/libre.jpg',
          title: 'soyez libre là où vous êtes',
          author: 'Frank Herbert',
          genre: 'Developpement personel',
          isbn: '978-2-266-32150-7',
          available: 4,
          total: 4
        },
        {
          cover: '/public/images/mathAi.jpg',
          title: 'MAthématiques pour le IA',
          author: 'Frank Herbert',
          genre: 'intelligence artifficielle',
          isbn: '978-2-266-32150-7',
          available: 6,
          total: 8
        },
        {
          cover: '/public/images/barack.jpg',
          title: 'Audace de esperer ',
          author: 'barack Obama',
          genre: 'developpement personnel',
          isbn: '978-2-266-32150-7',
          available: 3,
          total: 4
        }
      ]
    }
  },
  methods: {
    borrow(book) {
      alert(`Vous avez emprunté "${book.title}"`);
    },
    view(book) {
      alert(`Voir les détails de "${book.title}"`);
    },
    edit(book) {
      alert(`Modifier "${book.title}"`);
    },
    remove(book) {
      alert(`Supprimer "${book.title}"`);
    }
  }
}
</script>

<style scoped>
.catalogue-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
