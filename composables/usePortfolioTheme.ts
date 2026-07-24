export type PortfolioTheme = 'dark' | 'light'

export function usePortfolioTheme() {
  const theme = useCookie<PortfolioTheme>('portfolio-theme', {
    default: () => 'dark',
  })

  const isDark = computed(() => theme.value === 'dark')

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  function setTheme(value: PortfolioTheme) {
    theme.value = value
  }

  return { theme, isDark, toggleTheme, setTheme }
}
