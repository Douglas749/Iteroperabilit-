<template>
  <div class="search">
    <div class="search-contener">
      <span class="search-icon">🔍</span>
      <input type="text" placeholder="Chercher un Livre ou un Membre..." class="search-input">
    </div>
  </div>
</template>

<style scoped>
.search {
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 8px 12px;
  width: 75%;
  max-width: 300px;
}

.search-contener {
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border: 1px solid #cbd5e1; /* ✅ La bordure visible */
  border-radius: 20px;
  padding: 5px 10px;
  width: 100%;
}

.search-icon {
  font-size: 16px;
  color: #64748b;
  margin-right: 8px;
}

.search-input {
  border: none;
  background: transparent;
  outline: none;
  flex: 1;
  font-size: 14px;
  color: #1e293b;
}
</style>
