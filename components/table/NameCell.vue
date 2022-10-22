<template>
  <div class="name-cell">
    <img :src="image" loading="lazy" class="coin-logo" />
    <div class="name-container">
      <p class="name">{{ name }}</p>
      <p class="symbol">{{ symbol }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.name-cell {
  display: flex;
  align-items: center;
  gap: 6px;
}

.coin-logo {
  height: 24px;
  width: 24px;
  object-fit: cover;
}

.name-container {
  display: flex;
  gap: 5px;
}

.name-container p {
  font-weight: 500;
  writing-mode: lr;
}

.name-container > .name {
  margin: 0;
  font-weight: 600;
  color: #222529;
}

.name-container > .symbol {
  margin: 0;
  text-transform: uppercase;
  color: #808a9d;
}
</style>
