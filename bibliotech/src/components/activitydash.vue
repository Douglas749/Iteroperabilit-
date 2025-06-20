<template>
  <div class="actions-container">
    <ActionCard title="Nouveau emprunt" buttonText="Emprunter un Livre" />
    <ActionCard title="Rentour " buttonText="Rendre un Livre" />
    <ActionCard title="Inscription" buttonText="Inscrire un nouveau Membre" />
  </div>
</template>

<script>
import ActionCard from './activity.vue'

export default {
  components: {
    ActionCard
  }
}
</script>

<style scoped>
.actions-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 20px;
}
</style>
