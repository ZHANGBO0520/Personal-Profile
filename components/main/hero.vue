<script setup lang="ts">
import { homePage } from '~/data'
</script>

<template>
  <section class="container mx-auto px-6 py-10 sm:py-14">
    <div class="grid grid-cols-1 items-center gap-8 sm:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Marketing · Consumer Insight · Academic Portfolio
        </p>
        <h1 class="my-5 text-4xl font-bold leading-tight text-black dark:text-zinc-300 md:text-6xl">
          {{ homePage.title }}
        </h1>
        <p class="max-w-2xl text-lg leading-loose dark:text-zinc-400">
          {{ homePage.description }}
        </p>
        <div class="mt-7 flex flex-wrap gap-3">
          <NuxtLink
            to="/academic"
            class="rounded-md bg-zinc-800 px-4 py-2 text-sm font-semibold text-white dark:bg-[#F1F2F4] dark:text-slate-950"
          >
            View Academic Work
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="rounded-md bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm dark:bg-slate-900 dark:text-zinc-200"
          >
            View Profile
          </NuxtLink>
        </div>
      </div>
      <div class="justify-self-center">
        <LogoDog />
      </div>
    </div>
  </section>
</template>
