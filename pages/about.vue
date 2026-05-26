<script setup lang="ts">
import { aboutPage, footerData, navbarData, socialLinks } from '~/data'

useHead({
  title: 'Me',
  meta: [
    {
      name: 'description',
      content: footerData.aboutAuthor,
    },
  ],
})

defineOgImageComponent('About', {
  headline: 'Profile',
  title: navbarData.homeTitle,
  description: aboutPage.description,
  link: '/liu.png',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto px-6 py-8 text-zinc-600 dark:text-zinc-300">
    <section class="grid gap-8 pb-10 md:grid-cols-[1fr_280px]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Me
        </p>
        <h1 class="mt-2 text-3xl font-bold text-zinc-800 dark:text-[#F1F2F4] sm:text-5xl">
          {{ aboutPage.title }}
        </h1>
        <h2 class="mt-3 text-lg font-semibold text-zinc-700 dark:text-zinc-200 sm:text-2xl">
          {{ aboutPage.description }}
        </h2>
        <p class="mt-5 max-w-3xl leading-loose">
          {{ aboutPage.aboutMe }}
        </p>
      </div>

      <aside class="rounded-md bg-white p-5 shadow-sm dark:bg-slate-900">
        <NuxtImg src="/liu.png" width="220" height="220" quality="60" class="mb-5 w-full rounded-md object-cover" />
        <div class="grid gap-3">
          <NuxtLink
            :to="socialLinks.githubLink"
            target="_blank"
            class="rounded-md bg-zinc-100 px-3 py-2 text-sm font-semibold text-zinc-700 dark:bg-slate-800 dark:text-zinc-200"
          >
            GitHub
          </NuxtLink>
          <NuxtLink
            :to="`mailto:${aboutPage.email}`"
            class="rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-white dark:bg-[#F1F2F4] dark:text-slate-950"
          >
            {{ aboutPage.email }}
          </NuxtLink>
        </div>
      </aside>
    </section>

    <section class="border-t border-zinc-300 py-10 dark:border-slate-700">
      <h2 class="text-2xl font-bold text-zinc-800 dark:text-[#F1F2F4]">
        Education
      </h2>
      <div class="mt-5 grid gap-4">
        <article
          v-for="item in aboutPage.education"
          :key="item.school"
          class="rounded-md bg-white p-5 shadow-sm dark:bg-slate-900"
        >
          <div class="flex flex-wrap justify-between gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <span>{{ item.degree }}</span>
            <span>{{ item.period }}</span>
          </div>
          <h3 class="mt-2 text-lg font-semibold text-zinc-800 dark:text-[#F1F2F4]">
            {{ item.school }}
          </h3>
          <p class="mt-3 leading-loose">
            {{ item.details }}
          </p>
        </article>
      </div>
    </section>

    <section class="border-t border-zinc-300 py-10 dark:border-slate-700">
      <h2 class="text-2xl font-bold text-zinc-800 dark:text-[#F1F2F4]">
        Experience
      </h2>
      <div class="mt-5 grid gap-4">
        <article
          v-for="item in aboutPage.experience"
          :key="item.company"
          class="rounded-md bg-white p-5 shadow-sm dark:bg-slate-900"
        >
          <div class="flex flex-wrap justify-between gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <span>{{ item.role }}</span>
            <span>{{ item.period }}</span>
          </div>
          <h3 class="mt-2 text-lg font-semibold text-zinc-800 dark:text-[#F1F2F4]">
            {{ item.company }}
          </h3>
          <ul class="mt-3 list-disc space-y-2 pl-5 leading-loose">
            <li v-for="point in item.points" :key="point">
              {{ point }}
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="border-t border-zinc-300 py-10 dark:border-slate-700">
      <h2 class="text-2xl font-bold text-zinc-800 dark:text-[#F1F2F4]">
        Projects
      </h2>
      <div class="mt-5 grid gap-4 sm:grid-cols-2">
        <article
          v-for="item in aboutPage.projects"
          :key="item.title"
          class="rounded-md bg-white p-5 shadow-sm dark:bg-slate-900"
        >
          <div class="text-sm text-zinc-500 dark:text-zinc-400">
            {{ item.period }}
          </div>
          <h3 class="mt-2 text-lg font-semibold text-zinc-800 dark:text-[#F1F2F4]">
            {{ item.title }}
          </h3>
          <p class="mt-3 leading-loose">
            {{ item.description }}
          </p>
        </article>
      </div>
    </section>

    <section class="border-t border-zinc-300 py-10 dark:border-slate-700">
      <h2 class="text-2xl font-bold text-zinc-800 dark:text-[#F1F2F4]">
        Skills
      </h2>
      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="skill in aboutPage.skills"
          :key="skill"
          class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-zinc-700 shadow-sm dark:bg-slate-900 dark:text-zinc-200"
        >
          {{ skill }}
        </span>
      </div>
    </section>
  </main>
</template>
