<template>
  <div class="container">
    <p>{{ amountToDisplay }} {{ symbol }}</p>
    <DxProgressBar
      v-if="maxAmount && amount && maxAmount !== amount"
      :min="0"
      :max="maxAmount"
      :value="amount"
      :show-status="false"
    />
  </div>
</template>
<script>
import { DxProgressBar } from "devextreme-vue/progress-bar";
import priceToUI from "~/util/numberToCommaNumber";

export default {
  components: {
    DxProgressBar,
  },
  props: {
    amount: {
      type: Number,
      default: null,
    },
    maxAmount: {
      type: Number,
      default: null,
    },
    symbol: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      amountToDisplay: priceToUI(this.$props.amount),
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.container p {
  margin: 0;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
