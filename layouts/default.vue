<template>
  <div :dir="dir">
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return { dir: this.$i18n.localeProperties.dir };
  },
  watch: {
    "$i18n.localeProperties.dir": function (newVal) {
      this.dir = newVal;
    },
  },
};
</script>
<style>
* {
  margin: 0;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "segoe ui", Roboto,
    Helvetica, Arial, sans-serif;
}
</style>
