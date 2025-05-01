<script setup lang="ts">
import { marked } from "marked";
import { useJsonMs } from "@/plugins/jsonms";
import WelcomeItem from "@/components/WelcomeItem.vue";

const { data, locale } = useJsonMs();
</script>

<template>
  <main>
    <WelcomeItem
      v-for="(step, stepIdx) in data.default.steps"
      :key="step.hash"
    >
      <template #icon>
        {{ stepIdx + 1 }}
      </template>
      <template #heading>
        {{ step.title[locale] }}
      </template>
      <div v-html="marked.parse(step.text[locale])" />
    </WelcomeItem>
  </main>
</template>
