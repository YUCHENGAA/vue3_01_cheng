import { reactive, ref, watch } from 'vue'
import { users } from '@/data/userData'

export function useAuthForm() {
  const loginForm = reactive({
    username: '',
    password: '',
  })
  const loading = ref(false)
  const error = ref('')

  watch(
    () => [loginForm.username, loginForm.password],
    () => {
      error.value = ''
    }
  )

  async function login() {
    loading.value = true
    try {
      const matched = users.find(
        (u) => u.username === loginForm.username && u.password === loginForm.password
      )

      if (!matched) throw new Error('帳號或密碼錯誤')

      alert(`歡迎，${matched.username}！`)
    } catch (e) {
      error.value = '登入失敗'
    } finally {
      loading.value = false
    }
  }

  return { loginForm, loading, error, login }
}