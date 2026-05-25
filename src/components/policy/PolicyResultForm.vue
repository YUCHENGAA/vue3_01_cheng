<script setup lang="ts">
import type { Policy } from "@/types/policy";

defineProps<{
  policies: Policy[] | null;
  loading: boolean;
  error: string
}>();
console.log();
</script>

<template>
  <div>
    <p v-if="loading">載入中......</p>
    <div v-else-if="policies">
      <template  v-for="policy in policies" :key="policy.policyNo">
      <p>保單號：{{ policy.policyNo }}</p>
      <p>保戶姓名：{{ policy.holderName }}</p>
      <p>商品代碼：{{ policy.productName }}</p>
      <p>保單狀態：{{ policy.status }}</p>
      <hr>
    </template>
    </div>    
    <p v-else>尚無資料</p>
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
