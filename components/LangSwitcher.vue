<template>
  <div class="lang-switcher">
    <nuxt-link
      v-for="(locale, i) in showLocales"
      :key="i"
      :to="switchLocalePath(locale.code)"
      class="link"
    >
      {{ locale.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "LangSwitcher",
  computed: {
    showLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      );
    },
  },
};
</script>
<style>
.lang-switcher {
  display: flex;
  gap:16px
}

.link {
  text-decoration: none;
  color: #222529;
}
</style>
