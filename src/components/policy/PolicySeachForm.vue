<script setup lang="ts">
import {ref, reactive, computed, watch} from 'vue'

const props = defineProps<{
  loading: boolean
}>()

const searchBox = reactive({
    policyNo: '',
})//    holderName: ''


const emit = defineEmits<{
  submit: [policyNo: string]//, holderName: string
}>()

const policyNo = ref('')
//const holderName = ref('')

function onSubmit() {
  emit('submit', policyNo.value.trim())//, holderName.value.trim()
}

// const policyNoShow = computed(()=> searchBox.policyNo.trim().toUpperCase())
// const policyNoFormatted = computed(() => searchBox.policyNo.trim().toUpperCase())

</script>

<template>
  <form @submit.prevent="onSubmit">
    <label for="policyNo">保單號</label>
    <input id="policyNo" v-model="policyNo" type="text" />
    <!-- <label for="holderName">被保人</label>
    <input id="holderName" v-model="holderName" type="text" /> -->
    <button type="submit" :disabled="props.loading || !policyNo.trim()">
      {{ props.loading ? '查詢中...' : '查詢' }}
    </button>
  </form>
</template>