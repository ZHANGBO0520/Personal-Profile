<script lang="ts" setup>
import { academicPage, navbarData } from '~/data'

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Welcome To My Blog Site.',
    },
  ],
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: navbarData.homeTitle,
  description: 'Dive into web development',
  link: '/liu.png',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />

    <section class="px-6 py-10">
      <div class="border-t border-zinc-300 pt-10 dark:border-slate-700">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Portfolio
          </p>
          <h2 class="mt-2 text-2xl font-bold text-zinc-800 dark:text-[#F1F2F4] sm:text-3xl">
            {{ academicPage.title }}
          </h2>
          <p class="mt-3 leading-loose text-zinc-600 dark:text-zinc-300">
            {{ academicPage.summary }}
          </p>
        </div>

        <div class="mt-6 grid gap-3 sm:grid-cols-2">
          <div
            v-for="highlight in academicPage.highlights"
            :key="highlight"
            class="rounded-md bg-white px-4 py-3 text-sm font-medium text-zinc-700 shadow-sm dark:bg-slate-900 dark:text-zinc-200"
          >
            {{ highlight }}
          </div>
        </div>

        <div class="mt-8 grid gap-5">
          <article
            v-for="work in academicPage.works"
            :key="work.title"
            class="rounded-md bg-white p-5 shadow-sm dark:bg-slate-900"
          >
            <div class="flex flex-wrap items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <span>{{ work.type }}</span>
              <span>/</span>
              <span>{{ work.period }}</span>
            </div>
            <h3 class="mt-2 text-lg font-semibold text-zinc-800 dark:text-[#F1F2F4]">
              {{ work.title }}
            </h3>
            <p class="mt-3 leading-loose text-zinc-600 dark:text-zinc-300">
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
          </article>
        </div>
      </div>
    </section>

    <MainRecent />
    <MainTrending />
  </main>
</template>
