<template>
  <div
    class="min-h-screen bg-primary text-primary theme-root"
    :class="{ dark: isDark }"
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
