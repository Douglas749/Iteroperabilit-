<template>
  <div class="form-container">
    <button @click="showForm = !showForm" class="toggle-button">
      {{ showForm ? "Fermer le formulaire" : "+nouvel emprunt" }}
    </button>

    <form v-if="showForm" @submit.prevent="submitForm" class="register-form">
      <h2>S'inscrire</h2>

      <input v-model="form.name" type="text" placeholder="Nom" required />
      <input v-model="form.email" type="email" placeholder="Email" required />
      <input v-model="form.password" type="password" placeholder="Mot de passe" required />
      <input v-model="form.address" type="text" placeholder="Adresse" required />

      <button type="submit">Valider</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const showForm = ref(false)
const form = reactive({
  name: "",
  email: "",
  password: "",
  address: ""
})

const submitForm = () => {
  alert(`Bienvenue ${form.name} !`)
}
</script>

<style scoped>
.form-container {
  text-align: center;
  margin-top: 20px;
}

.toggle-button {
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #020a04;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.toggle-button:hover {
  background-color: #218838;
}

.register-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: 'Segoe UI', sans-serif;
}

.register-form h2 {
  text-align: center;
  margin-bottom: 10px;
  color: #333;
}

.register-form input {
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
}

.register-form input:focus {
  border-color: #007bff;
}

.register-form button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.register-form button:hover {
  background-color: #0056b3;
}
</style>
