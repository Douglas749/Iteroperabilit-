<template>
  <div class="book-card">
    <img :src="cover" alt="Couverture" class="book-cover" />
    
    <div class="book-content">
      <div class="book-header">
        <h3>{{ title }}</h3>
        <span :class="['badge', isAvailable ? 'available' : 'borrowed']">
          {{ isAvailable ? 'Disponible' : 'Emprunté' }}
        </span>
      </div>

      <p class="author">{{ author }}</p>
      <p class="genre">{{ genre }}</p>
      <p class="isbn">ISBN: {{ isbn }}</p>

      <p class="stock">
        {{ available }} / {{ total }} disponibles
      </p>

      <div class="actions">
        <button @click="$emit('view')" title="Voir">👁️</button>
        <button @click="$emit('edit')" title="Modifier">✏️</button>
        <button @click="$emit('delete')" title="Supprimer">🗑️</button>
      </div>

      <button
        class="borrow-btn"
        :disabled="!isAvailable"
        @click="$emit('borrow')"
      >
        {{ isAvailable ? 'Emprunter' : 'Non disponible' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    cover: String,
    title: String,
    author: String,
    genre: String,
    isbn: String,
    available: Number,
    total: Number
  },
  computed: {
    isAvailable() {
      return this.available > 0
    }
  }
}
</script>

<style scoped>
.book-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  width: 250px;
  height: 500px;
  display: flex;
  flex-direction: column;
}

.book-cover {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.book-content {
  padding: 16px;
}

.book-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
}

.available {
  background-color: #E0F7FA;
  color: #00796B;
}

.borrowed {
  background-color: #FFE0E0;
  color: #D32F2F;
}

.author, .genre, .isbn {
  font-size: 14px;
  color: #555;
}

.stock {
  font-weight: bold;
  margin-top: 10px;
}

.actions {
  display: flex;
  gap: 10px;
  margin: 12px 0;
}

.actions button {
  background: none;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px;
  cursor: pointer;
}

.borrow-btn {
  width: 100%;
  padding: 10px;
  background-color: #1E293B;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.borrow-btn:disabled {
  background-color: #E5E7EB;
  color: #9CA3AF;
  cursor: not-allowed;
}
</style>
