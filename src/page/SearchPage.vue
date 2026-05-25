<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import type { Product } from "@/types/product";
import SearchResultForm from "@/components/search/SearchResultForm.vue";
import HeaderSection from "@/components/share/HeaderSection.vue";
import { mockProducts } from "@/data/productData";

const products = reactive<Product[]>([...mockProducts]);
const selectedCategory = ref("");
const searchQuery = ref("");
const loading = ref(false);
const error = ref("");

watch(
  () => searchQuery.value,
  () => {
    error.value = "";
  },
);

const filteredProducts = computed(() => {
  return products.filter((p) => {
    const matchKey = p.productName.trim().includes(searchQuery.value);
    const matchCate =
      selectedCategory.value === "全部" ||
      p.productCategory === selectedCategory.value;
    return matchKey && matchCate;
  });
});
</script>

<template>
  <div class="section">
    <HeaderSection>
        <template v-slot:title> 即時搜尋與分類篩選器 </template>
      </HeaderSection>
    <label>分類標籤</label>
    <div class="buttons-row">
      <button
        :class="{ 'is-active': selectedCategory === '全部' }"
        @click="selectedCategory = '全部'"
      >
        全部
      </button>
      <button
        :class="{ 'is-active': selectedCategory === '電子產品' }"
        @click="selectedCategory = '電子產品'"
      >
        電子產品
      </button>
      <button
        :class="{ 'is-active': selectedCategory === '家具' }"
        @click="selectedCategory = '家具'"
      >
        家具
      </button>
      <button
        :class="{ 'is-active': selectedCategory === '雜貨' }"
        @click="selectedCategory = '雜貨'"
      >
        雜貨
      </button>
      <button
        :class="{ 'is-active': selectedCategory === '收納商品' }"
        @click="selectedCategory = '收納商品'"
      >
        收納
      </button>
    </div>
    <div class="form-row">
      <label>關鍵字</label>
      <input v-model="searchQuery" placeholder="請輸入關鍵字" />
    </div>
    <div>
      <HeaderSection>
        <template v-slot:title> 查詢結果 </template>
      </HeaderSection>
      <!-- <p v-if="loading">載入中......</p> -->
      <p v-if="error">{{ error }}</p>
      <SearchResultForm
        v-else-if="filteredProducts.length > 0 || loading"
        :products="filteredProducts"
        :loading="loading"
      />
      <!-- <div v-else-if="filteredProducts.length > 0">
        <template v-for="product in filteredProducts" :key="product.productNo">
          <p>商品編號：{{ product.productNo }}</p>
          <p>商品名稱：{{ product.productName }}</p>
          <p>商品庫存：{{ product.productCount }}</p>
          <p>商品分類：{{ product.productCategory }}</p>
          <hr />
        </template>
      </div> -->
      <p v-else>尚未查詢資料</p>
    </div>
  </div>
</template>

<style scoped>
.buttons-row button {
  padding: 6px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: #ffffff;
  color: #111827;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
}

.buttons-row button:hover:not(.is-active) {
  background: #f3f4f6;
  border-color: #9ca3af;
}

.buttons-row button:active {
  transform: scale(0.97);
}

.buttons-row button.is-active {
  background: #3b82f6;
  color:white;
  border-color: #3b82f6;
  
}
</style>
