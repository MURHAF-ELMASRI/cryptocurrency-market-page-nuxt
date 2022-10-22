<template>
  <div v-if="price !== undefined" class="container">
    <p v-if="price > 0" class="increase">
      &#9652;
    </p>
    <p v-else class="decrease">
      &#9662;
    </p>

    <p :class="{ increase: price > 0, decrease: price <= 0 }">
      {{ price.toFixed(2) }}%
    </p>
  </div>
</template>
<script>
export default {
  props: {
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  gap: 4px;
  justify-content: flex-end;
}

.price {
  margin: 0;
}

p {
  margin: 0;
  font-weight: 500;
}

.increase {
  color: #16c784;
}

.decrease {
  color: #ea3943;
}
</style>
