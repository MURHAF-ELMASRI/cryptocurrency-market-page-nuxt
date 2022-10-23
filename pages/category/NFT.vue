<template>
  <div class="main">
    <div class="intro-container">
      <div class="intro-text-container">
        <h1>
          <span>{{ $t("nft.title") }}</span>
        </h1>
        <div>
          <p>
            {{ $t("nft.titleDesc") }}
          </p>
        </div>
      </div>
    </div>
    <DataGridTable :cryptos="data" />
  </div>
</template>

<script lang="ts">
import { computed, onMounted } from "vue";
import Table from "~/components/table/Table.vue";
import { useCryptoStore } from "~/store/cryptoStore";
export default {
  components: { DataGridTable: Table },
  setup() {
    const cryptoStore = useCryptoStore();
    onMounted(() => cryptoStore.fetchNftCrypto());
    const data = computed(() => cryptoStore.nftCryptoGetter);

    return { data };
  },
};
</script>

<style>
.main {
  padding: 0 16px;
  background-image: linear-gradient(
    rgb(248, 250, 253) 0%,
    rgba(248, 250, 253, 0%) 413px
  );
}
</style>
