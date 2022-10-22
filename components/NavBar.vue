<template>
  <div class="container">
    <div class="left-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png"
        width="40"
        class="crypto-logo"
      />
      <h3>Crypto Currency Market</h3>
    </div>
    <LangSwitcher />
  </div>
</template>

<script></script>

<style scoped>
.container {
  display: flex;
  padding: 16px;
  box-shadow: 0 1px 10px #999;
  align-items: center;
  justify-content: space-between;
}

.left-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.crypto-logo {
  object-fit: cover;
}
</style>
