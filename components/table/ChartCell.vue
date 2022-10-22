<template>
  <div class="chart-cell">
    <DxSparkline
      :data-source="cellData"
      :point-size="6"
      type="line"
      :show-first-last="false"
      :line-color="last7dayChange > 0 ? '#16c784' : '#ea3943'"
    >
      <DxSize :width="160" :height="40" />
      <DxTooltip :enabled="false" />
    </DxSparkline>
  </div>
</template>
<script>
import { DxSize, DxSparkline, DxTooltip } from "devextreme-vue/sparkline";

export default {
  components: {
    DxSparkline,
    DxSize,
    DxTooltip,
  },
  props: {
    cellData: {
      type: Array,
      default: () => [],
    },
    last7dayChange: {
      type: Number,
      required: true,
    },
  },
};
</script>
