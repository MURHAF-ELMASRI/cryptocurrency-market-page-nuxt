<template>
  <div class="table-container">
    <DxDataGrid
      :data-source="cryptos"
      key-expr="market_cap_rank"
      :load-panel="{ enabled: true }"
      :rtl-enabled="isRtl"
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
        :fixed-position="isRtl ? 'right' : 'left'"
        :allow-filtering="false"
      ></DxColumn>

      <DxColumn
        data-field="name"
        :caption="$t('crypto.name')"
        :fixed="true"
        :width="207"
        cell-template="name-cell"
        css-class="table-header"
        :fixed-position="isRtl ? 'right' : 'left'"
      ></DxColumn>

      <DxColumn
        data-field="current_price"
        :caption="$t('crypto.price')"
        cell-template="price-cell"
        :min-width="112"
        alignment="alignment"
        css-class="table-header"
      ></DxColumn>

      <DxColumn
        data-field="price_change_percentage_1h_in_currency"
        :caption="$t('crypto.1h')"
        cell-template="hour-price-change"
        :min-width="72"
        :alignment="alignment"
        css-class="table-header"
        :allow-filtering="false"
      ></DxColumn>

      <DxColumn
        data-field="price_change_percentage_24h_in_currency"
        :caption="$t('crypto.24h')"
        cell-template="day-price-change"
        :min-width="72"
        :alignment="alignment"
        css-class="table-header"
        :allow-filtering="false"
      ></DxColumn>

      <DxColumn
        data-field="price_change_percentage_7d_in_currency"
        :caption="$t('crypto.7d')"
        cell-template="7days-price-change"
        :min-width="72"
        :alignment="alignment"
        css-class="table-header"
        :allow-filtering="false"
      ></DxColumn>

      <DxColumn
        :min-width="144"
        :caption="$t('crypto.marketCap')"
        cell-template="market-cap-cell-template"
        :alignment="alignment"
        css-class="table-header"
        :allow-filtering="false"
      />

      <DxColumn
        :min-width="144"
        :caption="$t('crypto.volume')"
        cell-template="volume-cell-template"
        :alignment="alignment"
        css-class="table-header"
        :allow-filtering="false"
      />

      <DxColumn
        :min-width="208"
        :caption="$t('crypto.circulatingSupply')"
        cell-template="circulating-supply-cell-template"
        :alignment="alignment"
        css-class="table-header"
        :allow-filtering="false"
      />

      <DxColumn
        :caption="$t('crypto.last7Days')"
        cell-template="chart-cell-template"
        :width="160"
        css-class="table-header"
        :allow-filtering="false"
      />
      <!-- start data-grid tool bar  -->
      <DxToolbar>
        <DxItem location="before" template="DeFi" />

        <DxItem location="after" template="pagingControl" />
      </DxToolbar>
      <template #DeFi>
        <nuxt-link to="Defi" class="link">
          Defi
        </nuxt-link>
      </template>
      <template #pagingControl>
        <SelectBox :items="sizeOption" :value="pageSize" />
      </template>
      <!-- end data-grid tool bar  -->

      <!-- start columns templates -->
      <template #chart-cell-template="{ data }">
        <ChartCell
          :cell-data="data.data.sparkline_in_7d.price"
          :last7day-change="data.data.price_change_percentage_7d_in_currency"
        />
      </template>
      <template #name-cell="{ data }">
        <NameCell
          :name="data.data.name"
          :image="data.data.image"
          :symbol="data.data.symbol"
        />
      </template>
      <template #price-cell="{ data }">
        <p class="price">{{ "$" + data.data.current_price }}</p>
      </template>

      <template #hour-price-change="{ data }">
        <PriceChangePercent
          :price="data.data.price_change_percentage_1h_in_currency"
        />
      </template>

      <template #day-price-change="{ data }">
        <PriceChangePercent
          :price="data.data.price_change_percentage_24h_in_currency"
        />
      </template>

      <template #7days-price-change="{ data }">
        <PriceChangePercent
          :price="data.data.price_change_percentage_7d_in_currency"
        />
      </template>

      <template #market-cap-cell-template="{ data }">
        <p class="price">{{ "$" + data.data.market_cap }}</p>
      </template>

      <template #volume-cell-template="{ data }">
        <p class="price">{{ "$" + data.data.total_volume }}</p>
      </template>

      <template #circulating-supply-cell-template="{ data }">
        <CirculatingSupplyCell
          :amount="data.data.circulating_supply"
          :max-amount="data.data.total_supply"
          :symbol="data.data.symbol"
        />
      </template>
      <!-- end columns templates -->
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
  computed: {
    isRtl(): boolean {
      return this.$i18n.localeProperties.dir === "rtl";
    },
    alignment(): "left" | "right" {
      return this.$i18n.localeProperties.dir === "rtl" ? "left" : "right";
    },
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
