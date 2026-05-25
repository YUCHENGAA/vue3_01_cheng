<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { DemoNavItem } from '../router'

defineProps<{
  items: readonly DemoNavItem[]
}>()
</script>

<template>
  <aside class="app-sidebar">
    <!-- <div class="app-sidebar__brand">
      <strong>課堂練習導航</strong>
      <p>用 Vue Router 控制不同練習主題的頁面切換，讓每個主題都有自己的網址。</p>
    </div> -->

    <nav class="sidebar-nav" aria-label="練習主題選單">
      <RouterLink
        v-for="item in items"
        :key="item.path"
        :to="item.path"
        class="sidebar-link"
        active-class="sidebar-link--active"
      >
        <span class="sidebar-link__kicker">{{ item.shortLabel }}</span>
        <strong>{{ item.label }}</strong>
        <span>{{ item.description }}</span>
      </RouterLink>
    </nav>
  </aside>
</template>

<style>
/* AppSidebar.vue */
/* .sidebar {
  display: flex;
  flex-direction: column;  
  width: 200px;
  min-height: 100vh;
}
.app-sidebar {
  padding: 28px 22px;
  background: linear-gradient(180deg, var(--sidebar) 0%, #102f2d 100%);
  color: var(--sidebar-text);
  display: grid;
  align-content: start;
  gap: 24px;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
} */
</style>