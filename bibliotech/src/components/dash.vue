<template>
  <div class="dashboard">
    <StatCard
      title="Livres en catalogue"
      value="2,847"
      subtitle="+12% ce mois"
      iconClass="fas fa-book"
      colorClass="bg-blue"
    />
    <StatCard
      title="Membres actifs"
      value="1,203"
      subtitle="+5% ce mois"
      iconClass="fas fa-users"
      colorClass="bg-green"
    />
    <StatCard
      title="Emprunts en cours"
      value="456"
      subtitle="23 aujourd'hui"
      iconClass="fas fa-calendar"
      colorClass="bg-purple"
    />
    <StatCard
      title="Retards"
      value="18"
      subtitle="-2 depuis hier"
      iconClass="fas fa-exclamation-triangle"
      colorClass="bg-orange"
    />
  </div>
</template>

<script>
import StatCard from './stat.vue'

export default {
  components: {
    StatCard
  }
}
</script>

<style scoped>
.dashboard {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #f9fbfd;
}
</style>
