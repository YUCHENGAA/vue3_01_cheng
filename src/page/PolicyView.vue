<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import type { Policy } from "@/types/policy";
import PolicyResultForm from "@/components/policy/PolicyResultForm.vue";
import PolicySeachForm from "@/components/policy/PolicySeachForm.vue";
import { getPolicyResult } from "@/severs/policyResult";
import HeaderSection from "@/components/share/HeaderSection.vue";

const policy = ref<Policy | null>(null);
const searchBox = reactive({
  policyNo: "",
});
const loading = ref(false);
const error = ref("");
// const results = ref<Policy[]>([])

// const policyNoShow = computed(()=> searchBox.policyNo.trim().toUpperCase())
const policyNoFormatted = computed(() =>
  searchBox.policyNo.trim().toUpperCase(),
);

watch(
  () => searchBox.policyNo,
  () => {
    error.value = "";
  },
);

async function search(policyNo: string) {
  //, holderName: string
  loading.value = true;
  error.value = "";

  try {
    policy.value = await getPolicyResult(policyNo); //, holderName
    console.log("policy.value= ", policy.value);
  } catch (e) {
    policy.value = null;
    error.value = "查詢失敗，請確認保單號或稍後再試";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="head">
    <h2>保單壽險查詢系統</h2>
    <div class="section-a">
      <HeaderSection>
        <template v-slot:title> 保單壽險查詢 </template>
      </HeaderSection>
      <PolicySeachForm :loading="loading" @submit="search" />
    </div>
    <div class="section-b">
      <HeaderSection>
        <template v-slot:title> 查詢結果 </template>
      </HeaderSection>
      <p v-if="error">{{ error }}</p>
      <PolicyResultForm
        v-if="policy || loading"
        :policy="policy"
        :loading="loading"
      />
    </div>
  </div>
</template>

<style lang="css">

/* ── 整體容器 ── */
.head {
  /* min-height: 100vh; */
  background-color: white;
  padding: 2rem;
  /* width: 500px; */
  min-height: 300px;
}

/* ── 頁面標題 ── */
.head h2 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c4a6e;
  margin-bottom: 1.5rem;
  letter-spacing: 0.04em;
}

/* ── 兩欄 Grid 佈局 ── */
.section-a,
.section-b {
  background: #dce8f5;
  border: 1px solid #b8d0ea;
  border-radius: 10px;
  padding: 1.25rem;
  display: inline-block;
  vertical-align: top;
  width: 300px;
  min-height: 200px;
}

.section-a {
  margin-right: 1.5rem;
}

/* ── Header 區塊 (HeaderSection slot) ── */
.section-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #4a6fa5;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #dce8f5;
  letter-spacing: 0.05em;
}

/* ── 表單欄位 ── */
/* .form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 1rem;
}

.form-group label {
  font-size: 0.8rem;
  color: #5a7a9e;
  font-weight: 500;
}

.form-group input {
  height: 38px;
  padding: 0 0.75rem;
  border: 1px solid #b8d0ea;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #2c4a6e;
  background: #f5f9fd;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-group input:focus {
  border-color: #4a6fa5;
  box-shadow: 0 0 0 3px rgba(74, 111, 165, 0.12);
  background: #ffffff;
}

.form-group input::placeholder {
  color: #9ab5cc;
} */
</style>
