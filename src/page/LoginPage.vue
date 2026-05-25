//Options API寫法
<!-- <script lang="ts">
import {users} from '@/data/userData'
import { defineComponent } from 'vue'

export default defineComponent ({
    data() {
        return {
            loginForm:{
                username:'',
                password:''
            },
            loading: false,
            error: ''
        }
    },
    watch: {
        'loginForm.username'() {
            this.error = ''
        },
        'loginForm.password'() {
            this.error = ''
        }
    },
    methods: {
        async login() {
            this.loading = true
            try{
            const matched = users.find(
                u => u.username === this.loginForm.username && u.password === this.loginForm.password
            )

            if (!matched) throw new Error('帳號或密碼錯誤')

            alert(`歡迎，${matched.username}！`)
            } catch(e) {
            this.error = "登入失敗"
            } finally {
            this.loading = false
            }
        },
    },

})
</script> -->

// Composition API寫法
<script setup lang="ts">
import { useAuthForm } from '@/composables/useAuthForm'

const { loginForm, loading, error, login } = useAuthForm();

const emit = defineEmits<{
  (e: 'login-success'): void
}>()

async function handleLogin() {
  await login();
  if (!error.value) {
    emit('login-success');
  }
}
</script>

<template>
  <div class="section">
    <h2>保單登入</h2>
    <div class="form-row">
      <label>帳號</label>
    <input v-model="loginForm.username" placeholder="請輸入帳號" />
    </div>
    <div class="form-row">
       <label>密碼</label>
    <input v-model="loginForm.password" placeholder="請輸入密碼" />
    </div>
   
    <br />
    <button @click="handleLogin" >登入</button>
    <p v-if="loading">登入中......</p>
    <p v-else-if="error">{{ error }}</p>
  </div>
</template>

<style lang="css">
/* ── 整體容器 ── */
/* .section {
  padding: 2rem;
  margin: 2rem;
  min-height: 200px;
} */

/* ── 頁面標題 ── */
.head h2 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c4a6e;
  /* margin-bottom: 1.5rem; */
  /* letter-spacing: 0.04em; */
}
/* .button {
    margin-top: 20px;
} */
/* .form-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
} */

.form-row label {
  /* width: 50px; */
  flex-shrink: 0;
}

/* ── 兩欄 Grid 佈局 ── */
/* .section-a,
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
} */

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
</style>