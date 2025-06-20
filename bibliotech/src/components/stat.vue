<template>
  <div class="stat-card">
    <div class="header">
      <span class="title">{{ title }}</span>
    </div>
    <div class="value">{{ value }}</div>
    <div class="subtitle">{{ subtitle }}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    value: String,
    subtitle: String   
  }
}
</script>

<style scoped>
.stat-card {
  background: white;
  border-radius: 10px;
  padding: 50px;
  width: 240px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  font-family: sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: azure;
}

.title {
  font-weight: 600;
  color: #333;
}
.value {
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 30px;
  color: #0f172a;
}

.subtitle {
  color: #6b7280;
  margin-top: 4px;
  margin-left: 30px;
  font-size: 14px;
}
</style>
