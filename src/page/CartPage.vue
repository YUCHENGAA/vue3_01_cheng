<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import HeaderSection from "@/components/share/HeaderSection.vue";

const price = 60;
const quantity = ref(1);
const hasDiscount = ref(false);
const total = computed(
  () => price * quantity.value * (hasDiscount.value ? 0.8 : 1),
);

function quantityAdd() {
  quantity.value++;
}
function quantitySub() {
  quantity.value--;
}
</script>

<template>
  <div class="section">
    <HeaderSection>
      <template v-slot:title> 購物車數量與金額計算器 </template>
    </HeaderSection>
    <div>
      <label>商品名稱:</label>
      <label>牙刷</label>
      <br />
      <label>單價:</label>
      <label>{{ price }}</label>
      <br />
      <label>數量 </label>
      <button @click="quantitySub">-</button>
      <label>{{ quantity }}</label>
      <button @click="quantityAdd">+</button>
      <br />
      <input type="checkbox" v-model="hasDiscount" id="scales" name="折扣碼" />
      <label>啟用折扣碼</label>
      <br />
      <label>總金額 </label>
      <label>{{ total }}</label>
    </div>
  </div>
</template>
