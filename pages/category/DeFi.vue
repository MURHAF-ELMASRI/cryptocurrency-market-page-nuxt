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
      <DataGridTable />
    </div>
  </template>
  
  <script lang="ts">
  import Table from "~/components/table/Table.vue";
  export default { components: { DataGridTable: Table } };
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
  