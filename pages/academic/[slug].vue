<script setup lang="ts">
import { academicPage } from '~/data'

const route = useRoute()
const work = computed(() => academicPage.works.find(item => item.slug === route.params.slug))

useHead(() => ({
  title: work.value?.title || academicPage.title,
  meta: [
    {
      name: 'description',
      content: work.value?.description || academicPage.description,
    },
  ],
}))
</script>

<template>
  <main class="container max-w-5xl mx-auto px-6 py-8 text-zinc-600 dark:text-zinc-300">
    <NuxtLink to="/academic" class="text-sm font-semibold text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-[#F1F2F4]">
      ← Back to Academic Work
    </NuxtLink>

    <article v-if="work" class="mt-6">
      <header class="max-w-3xl border-b border-zinc-300 pb-8 dark:border-slate-700">
        <div class="flex flex-wrap items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <span>{{ work.type }}</span>
          <span>/</span>
          <span>{{ work.period }}</span>
        </div>
        <h1 class="mt-3 text-3xl font-bold leading-tight text-zinc-800 dark:text-[#F1F2F4] sm:text-5xl">
          {{ work.title }}
        </h1>
        <p class="mt-5 leading-loose">
          {{ work.description }}
        </p>
      </header>

      <section class="grid gap-6 py-8 md:grid-cols-[1fr_280px]">
        <div class="rounded-md bg-white p-5 shadow-sm dark:bg-slate-900">
          <h2 class="text-xl font-semibold text-zinc-800 dark:text-[#F1F2F4]">
            纲要
          </h2>
          <ol class="mt-4 list-decimal space-y-3 pl-5 leading-loose">
            <li v-for="item in work.outline" :key="item">
              {{ item }}
            </li>
          </ol>
        </div>

        <aside class="rounded-md bg-white p-5 shadow-sm dark:bg-slate-900">
          <h2 class="text-xl font-semibold text-zinc-800 dark:text-[#F1F2F4]">
            方法与关键词
          </h2>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="method in work.methods"
              :key="method"
              class="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-slate-800 dark:text-zinc-300"
            >
              {{ method }}
            </span>
          </div>
          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tag in work.tags"
              :key="tag"
              class="rounded-md bg-zinc-800 px-2 py-1 text-xs text-white dark:bg-[#F1F2F4] dark:text-slate-950"
            >
              {{ tag }}
            </span>
          </div>
        </aside>
      </section>

      <section id="source-note" class="rounded-md border border-zinc-300 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 class="text-xl font-semibold text-zinc-800 dark:text-[#F1F2F4]">
          查看原文
        </h2>
        <p class="mt-3 leading-loose">
          原文文件需要先移除学号、课程提交表和本地隐私信息后再公开上传。确认公开版本后，这里会放置可直接查看或下载的原文链接。
        </p>
      </section>
    </article>

    <section v-else class="mt-8 rounded-md bg-white p-6 shadow-sm dark:bg-slate-900">
      <h1 class="text-2xl font-bold text-zinc-800 dark:text-[#F1F2F4]">
        Academic work not found
      </h1>
      <p class="mt-3">
        This academic item does not exist. Please return to the academic work list.
      </p>
    </section>
  </main>
</template>
