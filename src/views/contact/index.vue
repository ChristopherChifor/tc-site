<template>
  <Header title="contact" />
  <Container>
    <div class="grid md:grid-cols-2 gap-10">
      <div>
        <h3>Contact Info</h3>
      </div>
      <div class="bg-accent-lightest">
        <h3>Contact Info</h3>
      </div>
    </div>
  </Container>

  <div class="h-96 bg-red-200"></div>
</template>

<script>
import Container from "../../components/layouts/Container.vue";
import Header from "@/components/base/Header";

export default {
  components: {
    Header,
    Container,
  },
};
</script>
