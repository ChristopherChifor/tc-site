<template>
  <ul class="unstyled space-y-1">
    <li v-for="(item, index) in items" :key="index" class="flex items-center">
      <ArrowRightIcon class="mr-2 w-4 h-4 text-accent" />
      {{ item }}
    </li>
  </ul>
</template>

<script>
import { ArrowRightIcon } from "@heroicons/vue/solid";

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ArrowRightIcon,
  },
};
</script>
