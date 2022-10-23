<template>
  <h3>{{ test }}</h3>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    console.log(this.$props);
    return {
      test: this.$props.data,
    };
  },
});
</script>
