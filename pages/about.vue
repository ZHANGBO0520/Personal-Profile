<script setup lang="ts">
import { aboutPage, academicPage, footerData, navbarData, socialLinks } from '~/data'

useHead({
  title: 'About',
  meta: [
    {
      name: 'description',
      content: footerData.aboutAuthor,
    },
  ],
})

defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: navbarData.homeTitle,
  description: 'Dive into web development with me and learn Js, Ts, Vue, Nuxt, Docker, k8s',
  link: '/liu.png',
})
</script>

<template>
  <div class="py-5">
    <div class="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl mx-auto">
      <div class="col-span-5 max-w-md">
        <div class="flex justify-between">
          <div>
            <h1 class="text-xl sm:text-4xl pb-2 font-bold">
              {{ aboutPage.title }}
            </h1>

            <div class="my-3 space-x-2 md:space-x-3 pb-10">
              <NuxtLink
                :to="socialLinks.githubLink"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Github"
              >
                <Icon name="fa:github" size="1em" />
              </NuxtLink>
              <NuxtLink
                :to="socialLinks.giteeLink"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="LinkedIn"
              >
                <Icon name="simple-icons:gitee" size="1em" />
              </NuxtLink>
              <NuxtLink
                :to="socialLinks.twitterLink"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Twitter"
              >
                <Icon name="fa:twitter-square" size="1em" />
              </NuxtLink>
              <NuxtLink
                :to="socialLinks.stackoverflowLink"
                target="_blank"
                class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="StackOverflow"
              >
                <Icon name="fa:stack-overflow" size="1em" />
              </NuxtLink>
            </div>
          </div>
          <div class="sm:hidden block col-span-3 pb-5 dark:text-[#F1F2F4]">
            <NuxtImg src="/liu.png" width="125" height="115" quality="50" class="rounded-md" />
          </div>
        </div>
        <h3 class="text-base sm:text-3xl font-semibold pb-7 sm:pb-12">
          {{ aboutPage.description }}
        </h3>

        <p class="whitespace-pre-line leading-loose">&#128080{{ aboutPage.aboutMe }}</p>
      </div>
      <div class="hidden sm:block col-span-3">
        <NuxtImg src="/liu.png" width="450" height="500" quality="50" class="rounded-md" />
      </div>
    </div>

    <section class="container max-w-5xl mx-auto px-6 pb-12">
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
  </div>
</template>
