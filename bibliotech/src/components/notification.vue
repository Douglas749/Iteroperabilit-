<template>
    <div class="notif-nonteneur">
        <span class="notif-icon">🔔</span>
        <span class="notif-text">Notifications</span>
        <span class="notif-badge">{{ count }}</span>
    </div>
</template>

<script>
export default {
  name: 'NotificationBadge',
  data() {
    return {
      count: 3, // dynamic value
    };
  },
};
</script>

<style scoped>
.notif-nonteneur {
  display: flex;
  align-items: center;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 6px 12px;
  background-color: white;
  font-family: sans-serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: fit-content;
}

.notif-icon {
  font-size: 18px;
  margin-right: 8px;
}

.notif-text {
  font-weight: 600;
  margin-right: 8px;
}

.notif-badge {
  background-color: #f44336; /* red */
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
