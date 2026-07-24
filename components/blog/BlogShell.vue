<template>
  <div
    :class="{ dark: isDark }"
    class="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100"
  >
    <PortfolioHeader />
    <main>
      <slot />
    </main>
    <PortfolioFooter />
  </div>
</template>

<script setup lang="ts">
const { isDark } = usePortfolioTheme()
</script>
