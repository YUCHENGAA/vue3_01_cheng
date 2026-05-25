<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";

const props = defineProps<{
  loading: boolean;
}>();

const searchBox = reactive({
  policyNo: "",
});

const emit = defineEmits<{
  submit: [policyNo: string];
}>();

const policyNo = ref("");
//const holderName = ref('')

function onSubmit() {
  emit("submit", policyNo.value.trim().toUpperCase());
}

// const policyNoShow = computed(()=> searchBox.policyNo.trim().toUpperCase())
// const policyNoFormatted = computed(() => searchBox.policyNo.trim().toUpperCase())
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="form-row">
      <label for="policyNo">保單號</label>
      <input id="policyNo" v-model="policyNo" type="text" />

      <button type="submit">
        {{ props.loading ? "查詢中..." : "查詢" }}
      </button>
    </div>
  </form>
</template>

<style lang="css">
.form-row {
  display: flex;
  align-items: center;
  gap: 12px; /* label 和 input 之間的距離 */
  margin-bottom: 12px;
}
</style>
