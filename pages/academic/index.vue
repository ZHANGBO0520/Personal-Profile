<script setup lang="ts">
import { academicPage } from '~/data'

useHead({
  title: academicPage.title,
  meta: [
    {
      name: 'description',
      content: academicPage.description,
    },
  ],
})
</script>

<template>
  <main class="container max-w-5xl mx-auto px-6 py-8 text-zinc-600 dark:text-zinc-300">
    <section class="max-w-3xl pb-8">
      <p class="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        Portfolio
      </p>
      <h1 class="mt-2 text-3xl font-bold text-zinc-800 dark:text-[#F1F2F4] sm:text-5xl">
        {{ academicPage.title }}
      </h1>
      <p class="mt-4 leading-loose">
        {{ academicPage.summary }}
      </p>
    </section>

    <section class="grid gap-3 pb-8 sm:grid-cols-2">
      <div
        v-for="highlight in academicPage.highlights"
        :key="highlight"
        class="rounded-md bg-white px-4 py-3 text-sm font-medium text-zinc-700 shadow-sm dark:bg-slate-900 dark:text-zinc-200"
      >
        {{ highlight }}
      </div>
    </section>

    <section class="grid gap-5">
      <article
        v-for="work in academicPage.works"
        :key="work.slug"
        class="rounded-md bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-slate-900"
      >
        <div class="flex flex-wrap items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <span>{{ work.type }}</span>
          <span>/</span>
          <span>{{ work.period }}</span>
        </div>
        <h2 class="mt-2 text-xl font-semibold text-zinc-800 dark:text-[#F1F2F4]">
          {{ work.title }}
        </h2>
        <p class="mt-3 leading-loose">
          {{ work.description }}
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tag in work.tags"
            :key="tag"
            class="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-slate-800 dark:text-zinc-300"
          >
            {{ tag }}
          </span>
        </div>
        <NuxtLink
          :to="`/academic/${work.slug}`"
          class="mt-5 inline-flex rounded-md bg-zinc-800 px-4 py-2 text-sm font-semibold text-white dark:bg-[#F1F2F4] dark:text-slate-950"
        >
          查看简介与纲要
        </NuxtLink>
      </article>
    </section>
  </main>
</template>
