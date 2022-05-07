<template>
  <Header title="announcements/:id" />
</template>

<script>
import Header from "@/components/base/Header";

import { announcements } from "@/data";

export default {
  components: {
    Header,
  },
  data() {
    return {
      announcements,
      item: announcements.find((item) => item.id === this.$route.params.id),
    };
  },

  watch: {
    $route() {
      this.item = announcements.find((item) => item.id === this.$route.params.id);
    },
  },
};
</script>
