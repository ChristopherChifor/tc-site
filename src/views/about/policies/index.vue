<template>
  <Header
    title="Policies"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus molestie congue sit consectetur metus consectetur montes, amet."
  />

  <!-- Container -->
  <Container>
    <div class="grid gap-7 ml-8">
      <div v-for="value in values" :key="value" class="flex items-center">
        <img src="@/assets/icons/document-icon.svg " alt="" />
        <h3 class="text-xl text-center mb-0 ml-2">{{ value }}</h3>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header";

const values = [
  "Mission Statement",
  "Vision Statement",
  "Statement of Value",
  "Intellectual Freedom",
  "Respect and Acknowledgement Declaration",
];

export default {
  components: {
    Header,
    Container,
  },

  data() {
    return {
      values,
    };
  },
};
</script>
