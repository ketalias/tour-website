<template>
  <div class="client-card">
    <h3 class="client-name">{{ client.name }}</h3>
    <p class="client-rate">
      Rating:
      <span v-for="n in client.rate" :key="n" class="star">⭐</span>
    </p>
    <p class="client-message">{{ client.message }}</p>
  </div>
</template>

<script>
export default {
  name: "ClientCard",
  props: {
    client: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.client-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem;
}

.client-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.client-rate {
  margin: 0.5rem 0;
  color: #f4a261;
}

.client-rate .star {
  color: #f4a261;
}

.client-message {
  color: #555;
  font-size: 0.9rem;
}
</style>
