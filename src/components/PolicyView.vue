<script setup lang="ts">
import {ref, reactive, computed, watch} from 'vue'
import { Policy } from '@/types/policy'

const searchBox = reactive({
    policyNo: ''
})
const loading = ref(false)
const error = ref('')
const results = ref<Policy[]>([])

// const policyNoShow = computed(()=> searchBox.policyNo.trim().toUpperCase())
const policyNoFormatted = computed(() => searchBox.policyNo.trim().toUpperCase())

const apiResults = [
  { policyNo: 'A123456789', holderName: '王小明', productName: '終身壽險', status: '有效' },
  { policyNo: 'B987654321', holderName: '李小花', productName: '醫療險',  status: '有效' },
  { policyNo: 'C000000001', holderName: '張大同', productName: '車險',    status: '失效' },
]

watch(
  () => searchBox.policyNo,
  () => {
    error.value = ''
  }
)

async function submit() {
    loading.value = true
    
    try{
        const keyword = policyNoFormatted.value

        results.value = keyword ? apiResults.filter(p => p.policyNo.includes(keyword)) : []
        console.log('results.value=', results.value)
        // results.value = policyNoShow.value ? [policyNoShow.value] : []
    } catch(e) {
        error.value = "查詢失敗"
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div>
        <h2>保單壽險查詢系統</h2>
        <!-- <input v-model="searchBox.policyNo" placeholder="請輸入保單號" /> -->
        <el-input v-model="searchBox.policyNo" style="width: 240px" placeholder="請輸入保單號" />

        <el-button type="success" @click="submit">查詢</el-button>
        <!-- <button @click="submit">查詢</button> -->
        <p>保單號格式化結果:{{ policyNoFormatted }}</p>

        <p v-if="loading">載入中......</p>
        <p v-else-if="error">{{ error }}</p>
        <ul v-else-if="results.length">
            <el-table v-for="policy in results" :key="policy.policyNo" :data="results" >
                <el-table-column prop="policyNo" label="保單編號" width="180" />
                <el-table-column prop="holderName" label="被保人" width="180" />
                <el-table-column prop="productName" label="保單類型" width="180" />
                <el-table-column prop="status" label="保單狀態" width="180" />
            </el-table>
        </ul>
        <p v-else>尚無資料</p>
        <!-- <ul v-else-if="results.length">
            <li v-for="item in results " :key="item.policyNo">{{ item }}</li>
            <li v-for="policy in results" :key="policy.policyNo">
        {{}} - {{ policy.policyNo }} — {{ policy.holderName }} —
        {{ policy.productName }} — {{ policy.status }}
      </li>
        </ul> -->
        <!-- <p v-else>尚無資料</p> -->
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