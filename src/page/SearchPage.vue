<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import type { Product } from "@/types/product";
import SearchResultForm from "@/components/search/SearchResultForm.vue";
import HeaderSection from "@/components/share/HeaderSection.vue";
import { mockProducts } from "@/data/productData";

const products = reactive<Product[]>([...mockProducts]);
const selectedCategory = ref("全部");
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
    <label>分類標籤</label>
    <div class="buttons-row">
      <button @click="selectedCategory = '全部'">全部</button>
      <button @click="selectedCategory = '電子產品'">電子產品</button>
      <button @click="selectedCategory = '家具'">家具</button>
      <button @click="selectedCategory = '雜貨'">雜貨</button>
      <button @click="selectedCategory = '收納'">收納</button>
    </div>
    <div class="form-row">
      <label>關鍵字</label>
      <input v-model="searchQuery" placeholder="請輸入關鍵字" />
    </div>
    <div>
      <HeaderSection>
        <template v-slot:title> 查詢結果 </template>
      </HeaderSection>
      <p v-if="loading">載入中......</p>
      <p v-else-if="error">{{ error }}</p>
      <div v-else-if="filteredProducts.length > 0">
        <template v-for="product in filteredProducts" :key="product.productNo">
          <p>商品編號：{{ product.productNo }}</p>
          <p>商品名稱：{{ product.productName }}</p>
          <p>商品庫存：{{ product.productCount }}</p>
          <p>商品分類：{{ product.productCategory }}</p>
          <hr />
        </template>
      </div>
      <p v-else>尚無資料</p>
    </div>
  </div>
</template>
