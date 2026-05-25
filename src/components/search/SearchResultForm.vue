<script setup lang="ts">
import type { Product } from "@/types/product";

defineProps<{
  products: Product[] | null;
  loading: boolean;
}>();
</script>

<template>
  <div>
    <p v-if="loading">載入中......</p>
    <div v-else-if="products">
      <template  v-for="product in products" :key="product.productNo">
      <p>商品編號：{{ product.productNo }}</p>
      <p>商品名稱：{{ product.productName }}</p>
      <p>商品庫存：{{ product.productCount }}</p>
      <p>商品分類：{{ product.productCategory }}</p>
      <hr>
    </template>
    </div>    
    <p v-else>查無資料</p>
  </div>
</template>

<style scoped>
:deep(.el-scrollbar__view) {
  display: block !important;
}

:deep(.el-table__header),
:deep(.el-table__body) {
  width: 100% !important;
}
</style>
