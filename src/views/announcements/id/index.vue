<template>
  <Header></Header>
  <Container>
    <h2>New Library Announcement</h2>
    <p class="mb-12">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie
    </p></Container
  >
</template>

<script>
import Header from "../../../components/base/Header.vue";
import Container from "../../../components/layouts/Container.vue";

import { announcements } from "@/data";

export default {
  components: {
    Container,
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
      this.item = announcements.find(
        (item) => item.id === this.$route.params.id
      );
    },
  },
};
</script>
