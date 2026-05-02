<template>
  <section id="contact" class="scroll-mt-24 bg-white">
    <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 class="text-2xl font-bold tracking-tight text-slate-900">Contact</h2>
      <p class="mt-3 max-w-2xl text-slate-600">
        Open to senior IC or tech lead conversations. Replace the placeholders with your preferred channels.
      </p>
      <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <a
          :href="`mailto:${email}`"
          class="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          {{ email }}
        </a>
        <div class="flex flex-wrap gap-6 text-sm">
          <a
            v-if="linkedinUrl"
            :href="linkedinUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
          >
            LinkedIn
          </a>
          <a
            v-if="githubUrl"
            :href="githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = 'you@example.com'
const linkedinUrl = 'https://www.linkedin.com/in/your-profile'
const githubUrl = 'https://github.com/your-username'
</script>
