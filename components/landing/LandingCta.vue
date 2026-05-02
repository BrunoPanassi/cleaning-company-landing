<template>
  <section id="contact" class="scroll-mt-24 pb-20 sm:pb-28">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div
        class="relative overflow-hidden rounded-3xl bg-teal-800 px-6 py-14 shadow-xl sm:px-12 sm:py-16"
      >
        <div
          class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-500/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl"
          aria-hidden="true"
        />
        <div class="relative mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            One CTA: contact BrunoPanassi by phone/WhatsApp
          </h2>
          <p class="mt-4 text-lg text-teal-100">
            Tap the primary number, choose your preferred website template, and send the message
            on WhatsApp in seconds.
          </p>
          <div class="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              @click="isDialogOpen = true"
              class="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-teal-900 shadow-sm transition hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-800"
            >
              {{ primaryPhone }}
            </button>
            <span class="text-sm text-teal-200/90 sm:pl-2">
              You can still call this number directly.
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div
    v-if="isDialogOpen"
    class="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/55 px-4"
    role="dialog"
    aria-modal="true"
    aria-label="Choose template message"
  >
    <div class="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl">
      <div class="flex items-start justify-between gap-4">
        <h3 class="text-xl font-semibold text-slate-900">Choose a template message</h3>
        <button
          type="button"
          class="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
          @click="isDialogOpen = false"
          aria-label="Close dialog"
        >
          ✕
        </button>
      </div>
      <p class="mt-2 text-sm text-slate-600">
        This will open WhatsApp with a pre-written message based on one template.
      </p>
      <div class="mt-5 space-y-3">
        <label
          v-for="template in cleaningTemplates"
          :key="template.id"
          class="block cursor-pointer rounded-xl border border-slate-200 p-4 transition hover:border-teal-300"
        >
          <div class="flex gap-3">
            <input
              v-model="selectedTemplateId"
              type="radio"
              name="selected-template"
              :value="template.id"
              class="mt-1 h-4 w-4 border-slate-300 text-teal-600 focus:ring-teal-500"
            >
            <div>
              <p class="font-semibold text-slate-900">{{ template.name }}</p>
              <p class="text-sm text-slate-600">{{ template.audience }}</p>
            </div>
          </div>
        </label>
      </div>
      <div class="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex w-full items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
        >
          Open WhatsApp with selected template
        </a>
        <button
          type="button"
          class="inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          @click="isDialogOpen = false"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { cleaningTemplates, primaryPhone, whatsappNumber } from '~/data/site'

const isDialogOpen = ref(false)
const selectedTemplateId = ref(cleaningTemplates[0].id)

const selectedMessage = computed(() => {
  const currentTemplate = cleaningTemplates.find((template) => template.id === selectedTemplateId.value)
  return currentTemplate?.message ?? cleaningTemplates[0].message
})

const whatsappUrl = computed(() => {
  const text = encodeURIComponent(selectedMessage.value)
  return `https://wa.me/${whatsappNumber}?text=${text}`
})
</script>
