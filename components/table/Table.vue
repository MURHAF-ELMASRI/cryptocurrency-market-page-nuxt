<template>
  <div class="table-container">
    <DxDataGrid
      :data-source="cryptos"
      key-expr="market_cap_rank"
      :load-panel="{ enabled: true }"
      :hover-state-enabled="true"
    >
      <!-- start data-grid settings -->
      <DxScrolling row-rendering-mode="virtual" />
      <DxFilterRow :visible="true" />
      <DxPaging :page-size="pageSize" />
      <!-- end data-grid settings -->

      <DxColumn
        data-field="market_cap_rank"
        caption="#"
        :width="40"
        :fixed="true"
        :allow-filtering="false"
      ></DxColumn>

      <DxColumn
        data-field="name"
        :caption="$t('crypto.name')"
        :fixed="true"
        :width="207"
        css-class="table-header"
      ></DxColumn>

      <DxColumn
        data-field="current_price"
        :caption="$t('crypto.price')"
        :min-width="112"
        alignment="alignment"
        css-class="table-header"
      ></DxColumn>

      <DxColumn
        data-field="price_change_percentage_1h_in_currency"
        :caption="$t('crypto.1h')"
        :min-width="72"
        css-class="table-header"
        :allow-filtering="false"
      ></DxColumn>

      <DxColumn
        data-field="price_change_percentage_24h_in_currency"
        :caption="$t('crypto.24h')"
        :min-width="72"
        css-class="table-header"
        :allow-filtering="false"
      ></DxColumn>

      <DxColumn
        data-field="price_change_percentage_7d_in_currency"
        :caption="$t('crypto.7d')"
        :min-width="72"
        css-class="table-header"
        :allow-filtering="false"
      ></DxColumn>

      <DxColumn
        :min-width="144"
        :caption="$t('crypto.marketCap')"
        css-class="table-header"
        :allow-filtering="false"
      />

      <DxColumn
        :min-width="144"
        :caption="$t('crypto.volume')"
        css-class="table-header"
        :allow-filtering="false"
      />

      <DxColumn
        :min-width="208"
        :caption="$t('crypto.circulatingSupply')"
        css-class="table-header"
        :allow-filtering="false"
      />

      <!-- end data-grid tool bar  -->
    </DxDataGrid>
  </div>
</template>

<script lang="ts">
import {
  DxColumn,
  DxDataGrid,
  DxFilterRow,
  DxPaging,
  DxScrolling,
} from "devextreme-vue/data-grid";
import { computed, onMounted, ref } from "vue";

import { useCryptoStore } from "@/store/cryptoStore";

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxFilterRow,
    DxPaging,
  },
  setup() {
    const pageSize = ref(50);
    const sizeOption = ref([20, 50, 100]);
    const cryptoStore = useCryptoStore();
    onMounted(() => cryptoStore.fetchAllCrypto());
    const cryptos = computed(() => cryptoStore.allCryptoUI);

    return {
      cryptoStore,
      cryptos,
      pageSize,
      sizeOption,
    };
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

.intro-container {
  display: flex;
  padding: 24px 0;
}

.intro-text-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 512px;
}

.intro-text-container h1 {
  font-size: 24px;
  color: #222529;
}

.intro-text-container p {
  color: rgb(88, 102, 126);
}

.price {
  margin: 0;
  font-weight: 500;
}

.table-header {
  color: #222529;
  font-weight: bold;
}

.dx-grid {
  background-color: red;
}

.link {
  font-weight: 600;
  color: rgb(88, 102, 126);
  text-decoration: none;
}
</style>
