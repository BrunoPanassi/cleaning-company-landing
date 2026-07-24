<template>
  <section id="contact" class="scroll-mt-24 bg-white dark:bg-slate-950">
    <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Contact</h2>
      <p class="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
        Open to senior IC or tech lead conversations.
      </p>
      <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <a
          :href="`mailto:${email}`"
          class="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
        >
          {{ email }}
        </a>
        <div class="flex flex-wrap gap-6 text-sm">
          <a
            v-if="linkedinUrl"
            :href="linkedinUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 dark:text-slate-100 dark:decoration-slate-600 dark:hover:decoration-slate-100"
          >
            LinkedIn
          </a>
          <a
            v-if="githubUrl"
            :href="githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 dark:text-slate-100 dark:decoration-slate-600 dark:hover:decoration-slate-100"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = 'contact@brunopanassi.com'
const linkedinUrl = 'https://www.linkedin.com/in/bruno-henrique-panassi/'
const githubUrl = 'https://github.com/BrunoPanassi'
</script>
